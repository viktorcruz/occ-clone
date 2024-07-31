import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Headers from "../components/common/Headers";
import JobsCardDetail from "../components/jobs/JobsCardDetail";
import { useParams } from "react-router-dom";
import jobs from '../data/jobs'
import Footer from "../components/common/Footer";

const JobsPage = () => {
    const { id } = useParams()
    const job = jobs.find(job => job.id === id)

    return (
        <>
            <Headers />
            <Container id="main-content">
                <Box mt={3}>
                    {job ? (
                        <JobsCardDetail job={job} />
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
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default JobsPage