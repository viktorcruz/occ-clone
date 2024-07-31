import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styledComp from 'styled-components'
import SvgIcon from '../components/common/SvgIcon'
import LoginForm from "../components/form/LoginForm";
import { Link } from "react-router-dom";

const StyledAppBar = styledComp(AppBar)`
    position: relative !important;
    background-color: #fff !important;
`

const StyledLink = styledComp(Link)`
    display: flex;
`

const StyledDiv = styledComp.div`
    background-color: #fff;
`

const LoginPage = () => {
    return (
        <StyledDiv>
            <StyledAppBar className="header">
                <Toolbar className="header__toolbar">
                    <Typography>
                        <StyledLink to='/' color='inherit' underline='none'>
                            <SvgIcon />
                        </StyledLink>
                    </Typography>
                </Toolbar>
            </StyledAppBar>
            <LoginForm />
        </StyledDiv>
    )
}

export default LoginPage