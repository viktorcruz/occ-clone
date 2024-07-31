import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search'
import { MotionCard } from '../common/StyledComponents'

const RecentSearches = ({ recentSearches }) => {
    return (
        <div style={{ display: 'flex' }}>
            {recentSearches.map((item, index) => (
                <MotionCard whileHover={{ scale: 1.02, boxShadow: '0 10px 15px rgba(0,0,0,0.13' }} style={{maxWidth: 400, margin: '20px' }}>
                    <Box>
                        <CardContent style={{ display: 'flex', flexDirection: 'row', justifyItems: 'center' }}>
                            <Typography component='div' style={{ padding: 10, alignContent: 'center' }}>
                                <SearchIcon />
                            </Typography>
                            <Typography component='div' style={{ padding: 10 }}>
                                <Typography>{item.name}</Typography>
                                <Typography> {item.value} </Typography>
                            </Typography>

                        </CardContent>
                    </Box>
                </MotionCard>
            ))}
        </div>
    )
}

export default RecentSearches