import React, { useState, useContext } from "react";
import { Button, Grid, Container, Typography, Box } from "@mui/material";
import CustomTextField from "../common/CustomTextField";
import GoogleIcon from '@mui/icons-material/Google';
import styledComp from 'styled-components'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const StyledGoogleButton = styledComp(Button)`
    height: 60px !important;
    text-transform: capitalize !important;
    width: 100% !important;
`

const StyledButton = styledComp(Button)`
    height: 44px !important;
    text-transform: capitalize !important;
    width: 100% !important;
    background-color: #F13465 !important;
`

const StyledBorderBottom = styledComp.div`
    border-bottom: 1px solid #dddddd !important;
    margin: 15px 0 !important;
    width: 100% !important;
`

const StyledBox = styledComp(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100% - 3.5rem);
    outline: 0;
`

const StyledBoxContent = styledComp.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/search'); 
    };

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <StyledBoxContent>
            <StyledBox>
                <Container maxWidth='sm'>
                    <Typography variant="h4" gutterBottom>Registrate</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <StyledGoogleButton variant="outlined">
                                    <GoogleIcon />
                                    Con Google
                                </StyledGoogleButton>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', margin: '0 auto' }}>
                                <StyledBorderBottom></StyledBorderBottom>
                                <span style={{ margin: '4px 20px' }}>o</span>
                                <StyledBorderBottom></StyledBorderBottom>
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField
                                    placeholder='Nombre(s)*'
                                    variant='outlined'
                                    className="register__input"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField
                                    placeholder='Apellidos*'
                                    variant='outlined'
                                    className="register__input"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField
                                    placeholder='Email*'
                                    variant='outlined'
                                    className="register__input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField
                                    placeholder='Password*'
                                    variant='outlined'
                                    className="register__input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <ul style={{ fontSize: 14, margin: '0' }}>
                                    <li>
                                        <span>Debe tener al menos 8 caracteres</span>
                                    </li>
                                    <li>
                                        <span>Evita que sea similar a tu nombre, apellidos o email</span>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} style={{ fontSize: 14, margin: '0' }}>
                                <span>Al registrate aceptas nuestros Terminos y Condiciones y Aviso de privacidad.</span>
                            </Grid>
                            <Grid item xs={12}>
                                <StyledButton type='submit' variant="contained" fullWidth onClick={handleLogin}>
                                    Aceptar
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </StyledBox>
        </StyledBoxContent>
    )
}

export default RegisterForm