import React from "react";
import { Typography, CardContent, Divider } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { MotionCard } from '../../common/StyledComponents'

const CvFileLinksCard = () => {
    return (
        <MotionCard whileHover={{ scale: 1.02, boxShadow: '0 10px 15px rgba(0,0,0,0.13' }}>
            <CardContent style={{ flexDirection: 'column' }}>
                <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
                    Archivo y enlaces
                </Typography>
                <Typography component='div' style={{ display: 'flex', margin: '20px 0' }}>
                    <FileUploadIcon /><span style={{ margin: '0 5px' }}>user_cv.pdf</span>
                </Typography>
                <Divider />
                <Typography variant="subtitle1" style={{ margin: '20px 0' }}>
                    https://github.com/user
                </Typography>
            </CardContent>
        </MotionCard>
    )
}

export default CvFileLinksCard