import React from "react";
import { styled } from '@mui/material/styles'
import { Container, Box } from "@mui/material";
import { motion } from 'framer-motion'
import SearchHeader from "./SearchHeader";
import FiltersHeader from "./FiltersHeader";
import useStickyHeader from "../../hooks/useStickyHeader";
import { useLocation } from "react-router-dom";

const MatBox = styled(Box)`
    background-color: #204FB6 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0; 
`

const AuthenticatedHeaderSearch = () => {
    useStickyHeader("header-search")
    const location = useLocation()
    const isSearchPage = location.pathname.startsWith('/search')

    return (
        <motion.div id="header-search"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'sticky', top: '0px', zIndex: 1000 }}
        >
            <MatBox >
                <Container maxWidth='lg'>
                    <SearchHeader />
                    {isSearchPage && <FiltersHeader />}
                </Container>
            </MatBox>
        </motion.div>
    )
}

export default AuthenticatedHeaderSearch