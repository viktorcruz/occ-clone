import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styledComp from 'styled-components'
import RegisterForm from "../components/form/RegisterForm";
import { Link } from "react-router-dom";
import SvgIcon from '../components/common/SvgIcon'


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

const RegisterPage = () => {
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
            <RegisterForm />
        </StyledDiv>
    )
}

export default RegisterPage