import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search'

const RecentSearches = ({ recentSearches }) => {
    return (
        <div style={{ display: 'flex' }}>
            {recentSearches.map((item, index) => (
                <Card key={index} style={{ margin: 15, width: '100%' }}>
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
                </Card>
            ))}
        </div>
    )
}

export default RecentSearches