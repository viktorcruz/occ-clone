import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BodyBackground = ({ children }) => {
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.startsWith('/login') || location.pathname.startsWith('/register')) {
            document.body.style.background = '#FFF'
        }
        else if (location.pathname.startsWith('/jobs') || location.pathname.startsWith('/search') || location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/mycv')) {
            document.body.style.background = '#F5F5F8'
        }
        else {
            document.body.style.background = '#083CAE'
        }

        return () => {
            document.body.style.background = ''
        }
    }, [location.pathname])

    return <>{children}</>
}

export default BodyBackground