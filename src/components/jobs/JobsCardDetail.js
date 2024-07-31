import React from "react";
import { Typography, Box, AppBar, Toolbar, Button, Divider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import VerifiedIcon from '@mui/icons-material/Verified';
import { styled } from '@mui/material/styles'


const MatAppBar = styled(AppBar)(() => ({
    position: 'relative',
    backgroundColor: '#fff',
    color: '#000',
    borderBottom: '1px solid #dadada',
    minHeight: 200
}))

const MatToolbar = styled(Toolbar)(({ theme }) => ({
    flexDirection: 'column',
    minHeight: 200,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    '@media all': {
        minHeight: 128,
    },
}));

const MatButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#F13465 !important',
    color: theme.palette.common.white,
    textTransform: 'capitalize',
}))


const JobsCardDetail = ({ job }) => {
    const { details } = job

    return (
        <Box style={{ backgroundColor: '#fff', marginBottom: 15 }} >
            <CssBaseline />
            <MatAppBar component='nav' style={{ zIndex: 10 }}>
                <MatToolbar>
                    <Typography variant="h6" component='div'>
                        {job.title}
                    </Typography>
                    <Typography variant="h6" component='div'>
                        {job.company}
                    </Typography>
                    <Typography variant='body1' component='div' style={{ margin: '5px 0' }}>
                        {job.salary}
                    </Typography>
                    <Typography variant='body1' component='div' style={{ margin: '0 0 9px 0' }}>
                        Empresa verificada <VerifiedIcon />
                    </Typography>
                    <MatButton variant='contained' >
                        Postularme
                    </MatButton>
                </MatToolbar>
            </MatAppBar>
            <Box component='main' sx={{ p: 3 }}>
                <Typography variant="h6">
                    Sobre el empleo
                    {details.about.map((item, index) => (
                        <Typography key={index}>
                            <strong>{item.name}:</strong> {item.value}
                        </Typography>
                    ))}
                </Typography>
                <Divider style={{ margin: '13px 0' }} />
                <Typography variant="h6">
                    Detalles
                    {details.detail.map((item, index) => (
                        <Typography key={index}>
                            <strong>{item.name}</strong> {item.value}
                        </Typography>
                    ))}
                </Typography>
                <Divider style={{ margin: '13px 0' }} />
                <Typography variant="h6">
                    Beneficios
                    {details.benefits.map((item, index) => (
                        <Typography key={index}>
                            -  {item.value}
                        </Typography>
                    ))}
                </Typography>
                <Divider style={{ margin: '13px 0' }} />
                <Typography variant="h6">
                    Descripción
                    {details.description.map((item, index) => (
                        <Typography key={index}>
                            {item.value}
                        </Typography>
                    ))}
                </Typography>
                <Divider style={{ margin: '13px 0' }} />
                <Typography variant="h6">
                    Responsabilidades
                    {details.responsibilities.map((item, index) => (
                        <Typography key={index}>
                            -  {item.value}
                        </Typography>
                    ))}
                </Typography>
                <Divider style={{ margin: '13px 0' }} />
                <Typography variant="h6">
                    Perfil
                    {details.profile.map((item, index) => (
                        <Typography key={index}>
                            -  {item.value}
                        </Typography>
                    ))}
                </Typography>
            </Box>
        </Box>
    )
}


export default JobsCardDetail