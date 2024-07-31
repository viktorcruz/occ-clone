import React from "react";
import { CardContent, Box, Typography } from '@mui/material'
import CustomButton from "../../common/CustomButton";
import { MotionCard } from '../../common/StyledComponents'

const DashboardYourSpaceCard = () => {
    return (
        <MotionCard whileHover={{ scale: 1.02, boxShadow: '0 10px 15px rgba(0,0,0,0.13' }}>
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
        </MotionCard>
    )
}

export default DashboardYourSpaceCard