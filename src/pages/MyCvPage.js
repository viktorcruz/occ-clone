import React from "react";
import { Container, Box, Grid } from '@mui/material'
import Headers from "../components/common/Headers";
import CvUserCard from '../components/card/cv/CvUserCard'
import CvFileLinksCard from '../components/card/cv/CvFileLinksCard'
import CvSkillsCard from '../components/card/cv/CvSkillsCard'
import CvEducationCard from '../components/card/cv/CvEducationCard'
import CvSalaryCard from '../components/card/cv/CvSalaryCard'
import CvAreaExpertiseCard from '../components/card/cv/CvAreaExpertiseCard'
import CvCertificationsCard from '../components/card/cv/CvCertificationsCard'

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
                    p={2}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} >
                            <CvUserCard />
                            <CvFileLinksCard />
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <CvSalaryCard />
                            <CvAreaExpertiseCard />
                            <CvSkillsCard />
                            <CvEducationCard />
                            <CvCertificationsCard />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default MyCvPage