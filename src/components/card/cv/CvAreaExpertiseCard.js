import React from "react";
import { Typography, CardContent, Stack, Chip } from '@mui/material'
import AddTaskIcon from '@mui/icons-material/AddTask';
import CustomButton from "../../common/CustomButton";
import { MotionCard } from '../../common/StyledComponents'

const CvAreaExpertiseCard = () => {
    return (
        <MotionCard whileHover={{ scale: 1.02, boxShadow: '0 10px 15px rgba(0,0,0,0.13' }}>
            <CardContent style={{ flexDirection: 'column' }}>
                <Typography component='div' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" style={{ fontWeight: 600, marginBottom: 20 }}>
                        Área de especialidad
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
                <Stack direction='row' spacing={1} style={{ flexWrap: 'wrap', justifyContent: 'start' }}>
                    <Chip label='Desarrollo Web' variant="outlined" clickable style={{ margin: 10 }} />
                    <Chip label='Desarrollo de Software' variant="outlined" clickable style={{ margin: 10 }} />
                    <Chip label='Programador' variant="outlined" clickable style={{ margin: 10 }} />
                </Stack>
            </CardContent>
        </MotionCard>
    )
}

export default CvAreaExpertiseCard  