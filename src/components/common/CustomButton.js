import React from "react";
import { Button } from "@mui/material";
import { darken } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CustomButton = ({ variant, title, size, background, color, positionIcon, matIcon: MatIcon, width, height }) => {
    const customStyles = {
        border: background || '1px solid blue',
        background: background,
        color: color || '#fff',
        width: width || '100%',
        height: height || '45px',
        justifyContent: 'center',
        fontSize: '13px',
        textTransform: 'capitalize',
        margin: '0 5px',
        '&:hover': {
            background: background ? darken(background, 0.2) : darken('#fff', 0.1),
        },
    };

    return (
        <Button variant={variant} sx={customStyles}>
            {positionIcon === 'start' && <MatIcon style={{ marginRight: 1 }} />}
            {title}
            {positionIcon === 'end' && <MatIcon style={{ marginLeft: 1 }} />}
        </Button>
    );
};

CustomButton.defaultProps = {
    variant: 'contained',
    positionIcon: 'end',
    matIcon: ArrowDropDownIcon,
};

export default CustomButton;