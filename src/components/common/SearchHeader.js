import React from 'react';
import { styled } from '@mui/material/styles'
import { Button, Grid, TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon, LocationOn as LocationOnIcon } from "@mui/icons-material";


const SearchContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    boxShadow: theme.shadows[0],
    borderRadius: '10px',
    padding: theme.spacing(1),
}))

const SearchButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#F13465 !important',
    color: theme.palette.common.white,
    textTransform: 'capitalize',
}))

const MatGridContainer = styled(Grid)(() => ({
    width: '100% !important',
    margin: '0 !important',
    padding: '0 !important',
    justifyContent: 'center',
}))

const MatGridItem = styled(Grid)(() => ({
    position: "relative",
    width: '100% !important',
    backgroundColor: '#fff',
    borderRadius: '5px',
    justifyContent: 'center',
    padding: '10px !important',
    '&.MuiGrid-root': {
        width: '250px !important',
    }
}))

const MatTextField = styled(TextField)(() => ({
    '.MuiInputAdornment-root': {
        color: '#354456 !important',
    },
    '.MuiInput-root': {
        color: '#354456 !important',
        fontWeight: 700
    },
    '.MuiInput-input': {
        color: '#354456 !important',
    }
}))

const SearchHeader = () => {
    return (
        <SearchContainer>
            <MatGridContainer container spacing={1} alignItems='center' className="search-container__grid">
                <MatGridItem item xs={12} md={4} margin={1}>
                    <MatTextField
                        variant="standard"
                        placeholder="Puesto, area laboral o empresa"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            disableUnderline: true,
                        }}
                        style={{ width: '100%' }}
                    />
                </MatGridItem>
                <MatGridItem item xs={12} md={4} margin={1}>
                    <MatTextField
                        variant="standard"
                        placeholder="Ciudad o Estado"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOnIcon />
                                </InputAdornment>
                            ),
                            disableUnderline: true,
                        }}
                        style={{ width: '100%' }}
                    />
                </MatGridItem>
                <Grid item xs={12} md={2} margin={1} style={{ padding: 0 }}>
                    <SearchButton fullWidth variant='contained' >
                        Encontrar
                    </SearchButton>
                </Grid>
            </MatGridContainer>
        </SearchContainer>
    )
}

export default SearchHeader