import React from "react";
import { Typography, CardContent } from '@mui/material'
import AddTaskIcon from '@mui/icons-material/AddTask';
import CustomButton from "../../common/CustomButton";
import { MotionCard } from '../../common/StyledComponents'

const CvCertificationsCard = () => {
    return (
        <MotionCard whileHover={{ scale: 1.02, boxShadow: '0 10px 15px rgba(0,0,0,0.13' }}>
            <CardContent style={{ flexDirection: 'column' }}>
                <Typography component='div' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" style={{ fontWeight: 600, marginBottom: 20 }}>
                        Certificaciones
                    </Typography>
                    <Typography component='div'>
                        <CustomButton
                            variant='outlined'
                            title='Agregar'
                            color='#F13465'
                            width='100px'
                            height='30'
                            matIcon={AddTaskIcon}
                            positionIcon='start'
                        />
                    </Typography>
                </Typography>
                <Typography component='div' style={{ display: 'flex' }}>
                    <Typography variant="body2" style={{ marginTop: '10px' }}>
                        Compártenos si tienes cursos complementarios o certificados que validan tus connocimientos.
                    </Typography>
                </Typography>
            </CardContent>
        </MotionCard>
    )
}

export default CvCertificationsCard