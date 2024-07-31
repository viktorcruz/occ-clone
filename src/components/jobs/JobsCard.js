import React from "react";
import { Card, CardContent, Typography, Box, styled, useMediaQuery } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from "react-router-dom";
import styledComp from 'styled-components'

const StyledLink = styledComp(Link)`
    text-decoration: none;
    color: inherit;
`

const MatCard = styled(Card)`
    margin-bottom: 16px;
`
const company = '/assets/svg/lion.svg'



const JobsCard = ({ job, onJobSelect }) => {
    const isMobile = useMediaQuery(`(max-width: 900px)`)
    const cardContent = (
        <CardContent >
            <Typography style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '10px' }}>
                Hoy <CheckCircleIcon fontSize="13" style={{ marginLeft: '10px', marginRight: '10px', color: '#F13465' }} />
            </Typography>
            <Typography variant="h6" style={{ marginBottom: '5px' }}>{job.title}</Typography>
            <Typography variant="textSecondary">{job.salary}</Typography>
            <Box mt={2}>
                {job.benefits.map((benefit, index) => (
                    <Typography key={index} variant="body2">
                        - {benefit}
                    </Typography>
                ))}
            </Box>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mt={2}>
                        {job.company}
                    </Typography>
                    <Typography color='textSecondary'>
                        {job.location}
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={company} alt='' width={43} height={43} />
                </div>
            </div>
        </CardContent >
    )

    return (
        <MatCard onClick={() => onJobSelect(job)}>
            {isMobile ? (
                <StyledLink to={`/jobs/${job.id}`} job={job} >
                    {cardContent}
                </StyledLink>
            ) : (
                cardContent
            )}
        </MatCard>
    )
}

export default JobsCard