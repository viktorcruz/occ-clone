import React from "react";
import { styled } from '@mui/material/styles'
import { AppBar, Toolbar, Typography, useMediaQuery } from "@mui/material";
import styledComp from 'styled-components'
import SvgIcon from './SvgIcon'
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HouseIcon from '@mui/icons-material/House';
import HeaderMobile from "../header/HeaderMobile";


const MatMarket = styled('span')(({ theme }) => ({
    height: 3,
    width: '0%',
    backgroundColor: '#F13465',
    position: 'absolute',
    bottom: -3,
    left: 0,
    opacity: 0,
    transition: 'width 0.3s ease-in-out, opacity 0.3s ease-in-out',
    textDecoration: 'none'
}));

const MatMarketButton = styled('div')(({ theme }) => ({
    position: 'relative',
    boxSizing: 'border-box',
    display: 'inline-flex',
    lineHeight: 1.75,
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover, &.Mui-focusVisible': {
        '& .MatMarketButton-root': {
            width: '100%',
            opacity: 1,
        },
    },
    '&.MatMarketButton': {
        width: '100px',
        margin: '0 11px',
        color: '#FFF',
    },
    '&.MatMarketButton-Blog': {
        width: '100px',
        margin: '0 11px',
        color: '#FFF',
    },
}))

const MatAppBar = styled(AppBar)`
    background-color: #083CAE !important;
`

const StyledHeaderCenter = styledComp.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const StyledHeaderLeft = styledComp.div`
    display: flex;
    `

const StyledHeaderRight = styledComp.div`
    display: flex;
`

const StyledLink = styledComp(Link)`
    text-decoration: none; 
    color: inherit;
    display: inline-flex;
    display: flex;
`

const NoUnderlineTypography = styled(Typography)`
  text-decoration: none !important; 
  &:hover {
    text-decoration: none !important;
  }
`;

const AuthenticatedHeader = () => {
    const isMobile = useMediaQuery(`(max-width: 900px)`)

    return (
        <MatAppBar className="" position="sticky">
            <Toolbar>
                <Typography>
                    <StyledLink to='/' color='inherit' underline='none'>
                        <SvgIcon />
                    </StyledLink>
                </Typography>
                <StyledHeaderCenter className="">
                    <StyledHeaderLeft>
                        <StyledLink to='/dashboard' color='inherit' underline='none'>
                            <MatMarketButton
                                focusRipple
                                className='MatMarketButton-Blog'
                            >
                                <HouseIcon style={{ marginRight: 10 }} />
                                <NoUnderlineTypography component='p' variant="subtitle1" color='inherit'>
                                    Inicio
                                    <MatMarket className='MatMarketButton-root' />
                                </NoUnderlineTypography>
                            </MatMarketButton>
                        </StyledLink>
                        <StyledLink to='/search' color='inherit' underline='none'>
                            <MatMarketButton focusRipple className='MatMarketButton'>
                                <SearchIcon style={{ marginRight: 10 }} />
                                <NoUnderlineTypography component='p' variant="subtitle1" color='inherit'>
                                    Buscar
                                    <MatMarket className='MatMarketButton-root' />
                                </NoUnderlineTypography>
                            </MatMarketButton>
                        </StyledLink>
                        <StyledLink to='/mycv' color='inherit' underline='none'>
                            <MatMarketButton focusRipple className='MatMarketButton'>
                                <PersonIcon style={{ marginRight: 10 }} />
                                <NoUnderlineTypography component='p' variant="subtitle1" color='inherit'>
                                    Mí CV
                                    <MatMarket className='MatMarketButton-root' />
                                </NoUnderlineTypography>
                            </MatMarketButton>
                        </StyledLink>
                    </StyledHeaderLeft>
                    <StyledHeaderRight>

                    </StyledHeaderRight>
                </StyledHeaderCenter>
                {isMobile ? (
                    <HeaderMobile />
                ) : (
                    <>
                        <div style={{ display: 'flex', padding: 10, cursor: 'pointer' }}>
                            <ChatBubbleOutlineIcon />
                        </div>
                        <div style={{ display: 'flex', padding: 10, cursor: 'pointer' }}>
                            <MenuIcon />
                        </div>
                    </>
                )}
            </Toolbar>
        </MatAppBar>
    )
}

export default AuthenticatedHeader