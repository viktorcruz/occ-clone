import React from "react";
import { CardContent, Box, Typography, Divider, Avatar } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { MotionCard } from '../../common/StyledComponents'

const company = '/assets/svg/lion.svg'


const DashboardUserCard = () => {
    return (
        <MotionCard whileHover={{ scale: 1.02, boxShadow: '0 10px 15px rgba(0,0,0,0.13' }}>
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
                            Visitas a mi currículo
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
        </MotionCard>
    )
}

export default DashboardUserCard