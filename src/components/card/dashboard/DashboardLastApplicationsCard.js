import React from "react";
import { CardContent, Box, Typography, Divider } from '@mui/material'
import { MotionCard } from '../../common/StyledComponents'

const DashboardLastApplicationsCard = () => {
    return (
        <MotionCard whileHover={{ scale: 1.02, boxShadow: '0 10px 15px rgba(0,0,0,0.13' }}>
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
        </MotionCard>
    )
}

export default DashboardLastApplicationsCard