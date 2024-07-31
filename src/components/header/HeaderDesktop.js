import React from "react";
import { styled } from '@mui/material/styles'
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import styledComp from 'styled-components'
import SvgIcon from '../common/SvgIcon'
import { Link } from "react-router-dom";



const MatMarket = styled('span')(({ theme }) => ({
    height: 3,
    width: '0%',
    backgroundColor: '#F13465',
    position: 'absolute',
    bottom: -3,
    left: 0,
    opacity: 0,
    transition: 'width 0.3s ease-in-out, opacity 0.3s ease-in-out',
}));

const MatMarketButton = styled('span')(({ theme }) => ({
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
    },
    '&.MatMarketButton-Blog': {
        width: '50px',
        margin: '0 11px',
    }
}))

const MatButton = styled(Button)`
    margin: 0 11px !important;
    text-transform: none !important;
    color: #fff !important;
    border: 1px solid #2D59BA !important;
`

const StyledAppBar = styledComp(AppBar)`
    background-color: #083CAE !important;
`

const StyledHeaderCenter = styledComp.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const StyledHeaderLeft = styledComp.div`
    display: flex;
    `

const StyledHeaderRight = styledComp.div`
    display: flex;
`

const StyledLink = styledComp(Link)`
    display: flex;
`


const HeaderDestkop = () => {
    return (
        <div style={{ margin: 0, padding: 0 }}>

            <StyledAppBar className="header">
                <Toolbar className="header__toolbar">
                    <Typography>
                        <StyledLink to='/' color='inherit' underline='none'>
                            <SvgIcon />
                        </StyledLink>
                    </Typography>
                    <StyledHeaderCenter className="header-center">
                        <StyledHeaderLeft>
                            <MatMarketButton focusRipple className='MatMarketButton-Blog'>
                                <Typography component='span' variant="subtitle1" color='inherit'>
                                    Blog
                                    <MatMarket className='MatMarketButton-root' />
                                </Typography>
                            </MatMarketButton>
                            <MatMarketButton focusRipple className='MatMarketButton'>
                                <Typography component='span' variant="subtitle1" color='inherit'>
                                    Reclutadores
                                    <MatMarket className='MatMarketButton-root' />
                                </Typography>
                            </MatMarketButton>
                        </StyledHeaderLeft>
                        <StyledHeaderRight>
                            <StyledLink to='/register' style={{ textDecoration: 'none', color: '#fff' }} >
                                <MatMarketButton focusRipple className='MatMarketButton'>
                                    <Typography component='span' variant="subtitle1" color='inherit'>
                                        Registrate
                                        <MatMarket className='MatMarketButton-root' />
                                    </Typography>
                                </MatMarketButton>
                            </StyledLink>
                            <StyledLink to='/login' style={{ textDecoration: 'none', color: '#333' }} underline='none'>
                                <MatButton variant="outlined" className='MatButton'>
                                    <Typography component='span' variant="subtitle1" color='inherit'>
                                        Iniciar sesion
                                    </Typography>
                                </MatButton>
                            </StyledLink>
                        </StyledHeaderRight>
                    </StyledHeaderCenter>
                </Toolbar>
            </StyledAppBar>
        </div>
    )
}

export default HeaderDestkop