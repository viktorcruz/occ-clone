import React from "react";
import styledComp from 'styled-components'

const StyledDiv = styledComp.div`    
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    color: #fff;
    text-align: center;
`

const Footer = () => {
    return (
        <StyledDiv >
            <p>@2024 Demo</p>
        </StyledDiv>
    )
}

export default Footer 