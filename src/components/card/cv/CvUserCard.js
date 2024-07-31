import React from "react";
import { Typography, CardContent, Divider, Box } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import Avatar from '@mui/material/Avatar';
import DownloadIcon from '@mui/icons-material/Download';
import { MotionCard } from '../../common/StyledComponents'


const CvUserCard = () => {
    return (
        <MotionCard whileHover={{ scale: 1.02, boxShadow: '0 10px 15px rgba(0,0,0,0.13' }}>
            <CardContent >
                <Typography component='div'>
                    <DownloadIcon />
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar style={{ width: 150, height: 150 }} />
                </div>
                <Typography variant="h6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0' }}>
                    Hola, Victor!
                </Typography>
                <Divider />
                <Box mt={2}>
                    <Typography variant="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0' }}>
                        <FiberManualRecordIcon style={{ color: '#00b700', fontSize: 15, marginRight: 5 }} />
                        Tu currículo está activo y visible
                    </Typography>

                </Box>
            </CardContent >
        </MotionCard>
    )
}

export default CvUserCard