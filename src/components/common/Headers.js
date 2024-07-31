import React from "react";
import { motion } from 'framer-motion'
import AuthenticatedHeaderSearch from './AuthenticatedHeaderSearch'
import AuthenticatedHeader from "./AuthenticatedHeader";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import useStickyHeader from "../../hooks/useStickyHeader";


const Headers = () => {
    const controls = useScrollAnimation()
    useStickyHeader("header-search")

    return (
        <>
            <motion.div animate={controls}>
                <AuthenticatedHeader />
            </motion.div>
            <AuthenticatedHeaderSearch />
        </>
    )
}

export default Headers