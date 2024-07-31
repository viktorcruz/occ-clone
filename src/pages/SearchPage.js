import React, { useState } from "react";
import { Box, Grid, Typography, Container, useMediaQuery } from "@mui/material";
import JobsList from "../components/jobs/JobsList";
import Headers from "../components/common/Headers";
import JobsCardDetail from "../components/jobs/JobsCardDetail";
import Footer from "../components/common/Footer";


const SearchPage = () => {
    const isMobile = useMediaQuery('(max-width: 900px');
    const [selectedJob, setSelectedJob] = useState(null)

    const handleJobSelect = (job) => {
        setSelectedJob(job)
    }

    return (
        <>
            <Headers />
            <Container id="main-content">
                <Box mt={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} >
                            <JobsList onJobSelect={handleJobSelect} />
                        </Grid>
                        {!isMobile && (


                            <Grid item xs={12} md={7} className="sticky-container">
                                {selectedJob ? (
                                    <JobsCardDetail job={selectedJob} />
                                ) : (
                                    <>
                                        <Typography variant="h5" gutterBottom align="center">
                                            Encontramos estas vacantes de acuerdo a tu búsqueda
                                        </Typography>
                                        <Typography variant="body2" gutterBottom fontSize={16} align="center">
                                            Selecciona una de la lista para visualizar su información.
                                        </Typography>
                                        <Box
                                            display='flex'
                                            justifyContent='center'
                                            alignItems='center'
                                            height='100%'
                                            border='1px dashed #ccc'
                                            p={2}
                                        >
                                        </Box>
                                    </>
                                )}
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default SearchPage