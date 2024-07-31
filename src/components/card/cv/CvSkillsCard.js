import React from "react";
import { Typography, CardContent, Chip, Stack } from '@mui/material'
import AddTaskIcon from '@mui/icons-material/AddTask';
import CustomButton from "../../common/CustomButton";
import { MotionCard } from '../../common/StyledComponents'

const CvSkillsCard = () => {
    return (
        <MotionCard whileHover={{ scale: 1.02, boxShadow: '0 10px 15px rgba(0,0,0,0.13' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component='div' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" style={{ fontWeight: 600, marginBottom: 20 }}>
                        Habilidad
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
                    <Chip label='SCRUM' variant="outlined" clickable style={{ margin: 10 }} />
                    <Chip label='Angular' variant="outlined" clickable style={{ margin: 10 }} />
                    <Chip label='React' variant="outlined" clickable style={{ margin: 10 }} />
                    <Chip label='Vue' variant="outlined" clickable style={{ margin: 10 }} />
                    <Chip label='C#' variant="outlined" clickable style={{ margin: 10 }} />
                    <Chip label='.NET CORE' variant="outlined" clickable style={{ margin: 10 }} />
                    <Chip label='DDD' variant="outlined" clickable style={{ margin: 10 }} />
                    <Chip label='Arquitectura Hexagonal' variant="outlined" clickable style={{ margin: 10 }} />
                    <Chip label='Linux' variant="outlined" clickable style={{ margin: 10 }} />
                    <Chip label='SQL SERVER' variant="outlined" clickable style={{ margin: 10 }} />
                    <Chip label='MVC' variant="outlined" clickable style={{ margin: 10 }} />
                </Stack>
            </CardContent>
        </MotionCard>
    )
}

export default CvSkillsCard