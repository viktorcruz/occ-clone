import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";
import useMultipleLocationStartsWith from './useMultipleLocationStartsWith';


const useFillColor = () => {
    const location = useLocation()
    const matches = useMediaQuery('(max-width: 900px)')
    const isLoginOrRegister = useMultipleLocationStartsWith(['/login', '/register'])
    const isAuthenticatedPage = useMultipleLocationStartsWith(['/search', '/jobs', '/mycv', '/settings', '/dashboard'])
    const isHome = location.pathname.startsWith('/')
    const [fillColor, setFillColor] = useState('#083CAE')

    useEffect(() => {
        if (isAuthenticatedPage) {
            setFillColor("#FFF");
        }
        else if (isLoginOrRegister) {
            setFillColor("#083CAE");
        }
        else if (matches) {
            setFillColor("#083CAE");
        }
        else if (isHome && !matches) {
            setFillColor("#FFF");
        }
        else {
            setFillColor("#083CAE");
        }
    }, [isLoginOrRegister, isAuthenticatedPage, matches, isHome]);

    const fillStyle = {
        fill: fillColor,
        transition: 'fill 0.9s ease'
    }

    return [fillColor, fillStyle];
}

export default useFillColor