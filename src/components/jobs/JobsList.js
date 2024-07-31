import React from "react";
import { Grid, useMediaQuery } from '@mui/material'
import JobsCard from "./JobsCard";
import Jobs from '../../data/jobs'
import { styled } from '@mui/material/styles'

const MatGridContainer = styled(Grid)`
    width: 100%;
    @media (max-width: 900px){
        max-width: 100%;
    }
`

const JobsList = ({ onJobSelect }) => {
    const isSmallScreen = useMediaQuery(`(max-width: 900px)`)

    return (
        <MatGridContainer container spacing={0} style={{ maxWidth: isSmallScreen ? '100%' : '590px' }}>
            {Jobs.map((job, index) => (
                <Grid item xs={12} key={index}>
                    <JobsCard job={job} onJobSelect={onJobSelect} />
                </Grid>
            ))}
        </MatGridContainer>
    )
}

export default JobsList