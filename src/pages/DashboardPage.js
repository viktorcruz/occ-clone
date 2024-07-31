import React from "react";
import { Container, Box, Grid, Typography, Card, CardContent, Divider } from '@mui/material'
import Headers from "../components/common/Headers";
import Footer from "../components/common/Footer";
import { styled } from '@mui/material/styles'
import RecentSearches from "../components/card/RecentSearches";
import recentSearches from "../data/recentSearches";
import Avatar from '@mui/material/Avatar';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CustomButton from "../components/common/CustomButton";

const company = '/assets/svg/lion.svg'

const MatGridContainer = styled(Grid)`
    width: 100%;
    @media (max-width: 900px){
        max-width: 100%;
    }
`

const DashboardPage = () => {
    return (
        <>
            <Headers />
            <Container id="main-content">
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    height='100%'
                    p={2}
                >
                    <MatGridContainer container spacing={2}>
                        <Grid item xs={12} style={{ margin: 10 }} >
                            <RecentSearches recentSearches={recentSearches} />
                        </Grid>
                        <Grid item xs={12} md={7} >
                            <Typography variant="h6">
                                Explora tu espacio
                            </Typography>
                            <Card style={{ margin: 15, width: '100%' }}>
                                <Box>
                                    <CardContent >
                                        <Typography variant="h6" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '10px' }}>
                                            Fullstack Developer Lead
                                        </Typography>
                                        <Typography variant="body2" style={{ marginBottom: '5px' }}>Con más de 7 años dedicados conectando talento con las empresas...</Typography>
                                        <Typography component='div' style={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography variant="body2">Grupo Lost Sys</Typography>
                                            <Typography variant="body2">Guadalajara, Jalisco</Typography>
                                        </Typography>

                                        <div style={{ display: 'flex', justifyContent: 'start', marginTop: '10px' }}>
                                            <CustomButton
                                                variant='contained'
                                                background='#F13465'
                                                title='Postularme'
                                                color='#fff'
                                                width='100px'
                                                height='34px'
                                                matIcon='none'
                                            />

                                            <CustomButton
                                                variant='outlined'
                                                title='Descartar'
                                                color='blue'
                                                width='100px'
                                                height='34px'
                                                matIcon='none'
                                            />
                                        </div>
                                    </CardContent >
                                </Box>
                            </Card>

                            <Grid item xs={12}>
                                <Card style={{ margin: 15, width: '100%' }}>
                                    <Box>
                                        <CardContent >
                                            <Typography style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '10px', fontWeight: 600 }}>
                                                Últimas postulaciones
                                            </Typography>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                                <Typography variant="body2" style={{ marginLeft: 0, marginRight: 15 }}>
                                                    Net Developer
                                                </Typography>
                                                <Typography color='textSecondary' style={{ marginLeft: 0, marginRight: 15 }}>
                                                    $40,000 - $50,000
                                                </Typography>
                                                <Typography color='textSecondary'>
                                                    Ciudad de México
                                                </Typography>
                                            </div>
                                            <Divider />
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, marginTop: 20 }}>
                                                <Typography variant="body2" style={{ marginLeft: 0, marginRight: 15 }}>
                                                    Java Developer
                                                </Typography>
                                                <Typography color='textSecondary' style={{ marginLeft: 0, marginRight: 15 }}>
                                                    $40,000 - $50,000
                                                </Typography>
                                                <Typography color='textSecondary'>
                                                    Ciudad de México
                                                </Typography>
                                            </div>
                                            <Divider />
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, marginTop: 20 }}>
                                                <Typography variant="body2" style={{ marginLeft: 0, marginRight: 15 }}>
                                                    PHP Developer
                                                </Typography>
                                                <Typography color='textSecondary' style={{ marginLeft: 0, marginRight: 15 }}>
                                                    $40,000 - $50,000
                                                </Typography>
                                                <Typography color='textSecondary'>
                                                    Ciudad de México
                                                </Typography>
                                            </div>
                                        </CardContent >
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={5} >
                            <Card style={{ margin: '45px 10px 20px 10px', width: '100%' }}>
                                <Box>
                                    <CardContent >
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                                            <Avatar style={{ width: 130, height: 130 }} />
                                        </div>
                                        <Typography variant="h6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0' }}>
                                            Hola, Victor!
                                        </Typography>
                                        <Typography variant="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0' }}>
                                            <FiberManualRecordIcon style={{ color: '#00b700', fontSize: 15, marginRight: 5 }} />
                                            Tu currículo está activo y visible
                                        </Typography>
                                        <Divider />
                                        <Box mt={2}>
                                            <Typography variant="h6" style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', margin: '10px' }}>
                                                Visistas a mi currículo
                                            </Typography>
                                            <ul style={{ listStyle: 'none' }}>
                                                <li>
                                                    <div style={{ display: 'flex', justifyContent: 'start' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', marginRight: 20 }}>
                                                            <img src={company} alt='' width={43} height={43} />
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                            <Typography variant="subtitle" mt={2}>
                                                                Lost Sys
                                                            </Typography>
                                                            <Typography color='textSecondary' fontSize={13}>
                                                                Hace 2 días
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div style={{ display: 'flex', justifyContent: 'start' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', marginRight: 20 }}>
                                                            <img src={company} alt='' width={43} height={43} />
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                            <Typography variant="subtitle" mt={2}>
                                                                Lost Sys
                                                            </Typography>
                                                            <Typography color='textSecondary' fontSize={13}>
                                                                Hace 2 sem
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div style={{ display: 'flex', justifyContent: 'start' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', marginRight: 20 }}>
                                                            <img src={company} alt='' width={43} height={43} />
                                                        </div>
                                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                            <Typography variant="subtitle" mt={2}>
                                                                Lost Sys
                                                            </Typography>
                                                            <Typography color='textSecondary' fontSize={13}>
                                                                Hace 10 días
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Box>
                                    </CardContent >
                                </Box>
                            </Card>
                        </Grid>
                    </MatGridContainer>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default DashboardPage