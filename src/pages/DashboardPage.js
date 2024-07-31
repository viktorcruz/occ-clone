import React from "react";
import { Container, Box, Grid, Typography } from '@mui/material'
import Headers from "../components/common/Headers";
import Footer from "../components/common/Footer";
import { styled } from '@mui/material/styles'
import RecentSearches from "../components/card/RecentSearches";
import recentSearches from "../data/recentSearches";

import DashboardYourSpaceCard from '../components/card/dashboard/DashboardYourSpaceCard'
import DashboardLastApplicationsCard from '../components/card/dashboard/DashboardLastApplicationsCard'
import DashboardUserCard from '../components/card/dashboard/DashboardUserCard'

const MatGridContainer = styled(Grid)`
    width: 100%;
    @media (max-width: 900px){
        max-width: 100%;
    }
`

const DashboardPage = () => {
    return (
        <>
            <Headers />
            <Container id="main-content">
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    height='100%'
                    p={2}
                >
                    <MatGridContainer container spacing={2}>
                        <Grid item xs={12} style={{ margin: 10 }} >
                            <RecentSearches recentSearches={recentSearches} />
                        </Grid>
                        <Grid item xs={12} md={7} >
                            <Typography variant="h6">
                                Explora tu espacio
                            </Typography>

                            <DashboardYourSpaceCard />

                            <Grid item xs={12}>
                                <DashboardLastApplicationsCard />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={5} style={{ marginTop: 33 }} >
                            <DashboardUserCard />
                        </Grid>
                    </MatGridContainer>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default DashboardPage