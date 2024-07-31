import React from "react";
import { useMediaQuery } from "@mui/material";
import HeaderDestkop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import './Header.css'

const Header = () => {
    const isMobile = useMediaQuery('(max-width: 900px');

    return (
        <>
            {isMobile ? <HeaderMobile /> : <HeaderDestkop />}
        </>
    )
}

export default Header