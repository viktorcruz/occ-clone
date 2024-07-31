import React, { useState, useContext } from "react";
import { styled } from '@mui/material/styles'
import { AppBar, Toolbar, Typography, IconButton, List, ListItem, ListItemText } from "@mui/material";
import styledComp from 'styled-components'
import { Sling as Hamburger } from "hamburger-react";
import SvgIcon from '../common/SvgIcon'
import './HeaderMobile'
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'

const StyledAppBar = styledComp(AppBar)(({ location }) => ({
    backgroundColor: location === '/' ? '#fff' : '#083CAE',
}))

const SlideMenu = styled('div')(({ theme, open }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    transform: open ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 1000,
    paddingTop: theme.spacing(8),
}))

const StyledLink = styledComp(Link)`
    display: flex;
    text-decoration: none;
    color: #2e2e2e;
`

const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const renderMenuItems = () => {
        if (location.pathname !== '/') {
            return (
                <>
                    <StyledLink to='/dashboard'>
                        <ListItem button style={{ borderBottom: '1px solid lightgray', borderTop: '1px solid lightgray' }}>
                            <ListItemText primary='Inicio' style={{ padding: 15 }} />
                        </ListItem>
                    </StyledLink>
                    <StyledLink to='/search'>
                        <ListItem button style={{ borderBottom: '1px solid lightgray' }}>
                            <ListItemText primary='Busqueda' style={{ padding: 15 }} />
                        </ListItem>
                    </StyledLink>
                    <StyledLink to='/mycv'>
                        <ListItem button style={{ borderBottom: '1px solid lightgray' }}>
                            <ListItemText primary='Mi CV' style={{ padding: 15 }} />
                        </ListItem>
                    </StyledLink>
                </>
            );
        } else {
            return (
                <>
                    <StyledLink to='/register'>
                        <ListItem button style={{ borderBottom: '1px solid lightgray', borderTop: '1px solid lightgray' }}>
                            <ListItemText primary='Registrate' style={{ padding: 15 }} />
                        </ListItem>
                    </StyledLink>
                    <StyledLink to='/'>
                        <ListItem button style={{ borderBottom: '1px solid lightgray' }}>
                            <ListItemText primary='Blob' style={{ padding: 15 }} />
                        </ListItem>
                    </StyledLink>
                    <StyledLink to='/'>
                        <ListItem button style={{ borderBottom: '1px solid lightgray' }}>
                            <ListItemText primary='Reclutadores' style={{ padding: 15 }} />
                        </ListItem>
                    </StyledLink>
                </>
            );
        }
    };

    return (
        <div style={{ margin: 0, padding: 0 }}>
            <StyledAppBar className="header" location={location.pathname}>
                <Toolbar className="header__toolbar" style={{ background: location.pathname === '/' ? '#fff' : '#083CAE' }}>
                    <Typography>
                        <StyledLink to='/'>
                            <SvgIcon />
                        </StyledLink>
                    </Typography>
                    <IconButton
                        edge='start'
                        aria-label='menu'
                        onClick={() => toggleDrawer(!isOpen)}
                        style={{
                            marginRight: '16px',
                            color: location.pathname !== '/' ? '#fff' : '#000'
                        }}
                    >
                        <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
                    </IconButton>
                </Toolbar>
            </StyledAppBar>
            <SlideMenu open={isOpen} onClose={toggleDrawer(false)}>
                <List>
                    {renderMenuItems()}
                </List>
            </SlideMenu>
        </div>
    );
};

export default HeaderMobile