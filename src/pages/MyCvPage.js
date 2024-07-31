import React from "react";
import { Container, Box, Grid } from '@mui/material'
import Headers from "../components/common/Headers";

const MyCvPage = () => {
    return (
        <>
            <Headers />
            <Container id="main-content">
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    height='100%'
                    border='1px dashed #ccc'
                    p={2}
                >
                    <Grid container spacing={2}>

                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default MyCvPage