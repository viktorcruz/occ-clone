import React, { useEffect, useState, useRef } from "react";
import { Container, Grid, TextField, Button, InputAdornment, Paper, MenuItem, Typography } from "@mui/material";
import { Search as SearchIcon, LocationOn as LocationOnIcon } from "@mui/icons-material";
import { styled } from '@mui/material/styles'
import './SearchBar.css'
import { locations } from "../../data/locations";

const SearchContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    borderRadius: '10px',
    padding: theme.spacing(1),
}))

const SearchButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#F13465 !important',
    color: theme.palette.common.white,
    padding: theme.spacing(1, 2),
    '&:hover': {
        backgrounColor: theme.palette.error.dark
    }
}))

const MatGridContainer = styled(Grid)(() => ({
    width: '100% !important',
    margin: '0 !important',
    padding: '0 !important',
}))

const MatGridItem = styled(Grid)(() => ({
    position: "relative",
    width: '100% !important',
    margin: '0 !important',
    padding: '8px 0 !important',
    '&.MuiGrid-root': {
        width: '250px !important',
    }
}))

const MatTextField = styled(TextField)(() => ({
    border: 'none !important',
    '.MuiInputAdornment-root': {
        border: 'none',
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

const DropdownContainer = styled(Paper)`
  position: absolute;
  top: 60px;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
  margin: 5px 0;
`;


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null)

    useEffect(() => {
        if (searchTerm.length > 0) {
            const filtered = [];

            locations.countries.forEach(country => {
                if (country.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    filtered.push({ category: 'Países', ...country });
                }
            });

            for (const [country, states] of Object.entries(locations.states)) {
                states.forEach(state => {
                    if (state.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        filtered.push({ category: 'Estados', ...state });
                    }
                });
            }

            for (const [country, cities] of Object.entries(locations.cities)) {
                cities.forEach(city => {
                    if (city.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        filtered.push({ category: 'Ciudades', ...city });
                    }
                });
            }

            setFilteredLocations(filtered);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }, [searchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClose = () => {
        setShowDropdown(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false)
        }
    }

    useEffect(() => {
        if (showDropdown) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showDropdown])

    return (
        <Container style={{ borderRadius: 10 }}>
            <SearchContainer>
                <MatGridContainer container spacing={1} alignItems='center' className="search-container__grid">
                    <MatGridItem item xs={12} md={5}>
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
                    <MatGridItem item xs={12} md={5} className="search-container__grid">
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
                            onChange={handleSearchChange}
                        />
                        {showDropdown && (
                            <DropdownContainer ref={dropdownRef}>
                                {filteredLocations.map((location, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={handleClose}
                                    >
                                        <Typography variant="body2">{location.name}</Typography>
                                        <Typography variant="caption" color="textSecondary" style={{ marginLeft: 'auto' }}>
                                            {location.count}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </DropdownContainer>
                        )}
                    </MatGridItem>
                    <MatGridItem item xs={12} md={2}>
                        <SearchButton variant='contained' className='search-button'>
                            Encontrar
                        </SearchButton>
                    </MatGridItem>
                </MatGridContainer>
            </SearchContainer>
        </Container>
    )
}

export default SearchBar