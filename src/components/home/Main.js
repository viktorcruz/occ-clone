import React from "react";
import { Container, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import RoofingIcon from '@mui/icons-material/Roofing';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styledComp from 'styled-components'
import { styled } from '@mui/material/styles'
import SearchBar from '../searchbar/SearchBar'
import { device } from '../../assets/breackpoints'

const MatButton = styledComp(Button)`
    color: #fff !important;
    border: 1px solid #2D59BA !important;
    width: 100% !important;
`
const MatContainer = styled(Container)`
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledDiv = styledComp.div`
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    width: 670px;
    margin-top: 8rem;
    margin-bottom: 4rem;
    @media ${device.mobileL}{
        width: 300px;
        >.MuiTypography-root>span{
            font-size: 30px !important;
        }
    }
    @media ${device.tabletM} {
        width: 420px;
        >.MuiTypography-root>span{
            font-size: 45px !important;
        }
    }
    @media ${device.laptop}{
        width: 650px;
        >.MuiTypography-root>span{
            font-size: 70px !important;
        }
    }
`

const Main = () => {
    return (
        <MatContainer maxWidth='md' className="main__content">
            <StyledDiv>
                <Typography variant="h3" gutterBottom>
                    <span style={{
                        color: '#fff',
                        margin: 0,
                        paddingBottom: '2rem',
                    }}>
                        Encuentra el trabajo que  quieres
                    </span>
                </Typography>
            </StyledDiv>
            <Grid>
                <SearchBar />
            </Grid>
            <Grid container spacing={2} justifyContent='center' style={{ margin: '2rem 0' }}>
                <Grid item style={{ margin: '0 8px' }}>
                    <MatButton variant="outlined" startIcon={<RoofingIcon />}>Home office</MatButton>
                </Grid>
                <Grid item style={{ margin: '0 8px' }}>
                    <MatButton variant="outlined" startIcon={<AccessAlarmsIcon />}>Medio tiempo</MatButton>
                </Grid>
                <Grid item style={{ margin: '0 8px' }}>
                    <MatButton variant="outlined" startIcon={<DriveFileRenameOutlineIcon />}>Contratacion inmediata</MatButton>
                </Grid>
            </Grid>
            <div style={{ marginTop: '5rem' }}>
                <ExpandMoreIcon style={{ color: '#FFF' }} />
            </div>
        </MatContainer>
    )
}

export default Main