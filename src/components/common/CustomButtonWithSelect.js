import React, { useState } from "react";
import { Button, Menu } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { darken } from '@mui/material/styles';


const CustomButtonWithSelect = ({ title, background, color, matIcon: MatIcon, value, onChange, children }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (event, value) => {
        onChange(event);
        handleClose();
    };

    const buttonStyles = {
        color: color || '#fff',
        textTransform: 'capitalize',
        border: '1px solid #fff',
        width: '100%',
        padding: '2px 6px',
        background: background || '#083ace',
        '&:hover': {
            background: background ? darken(background, 0.2) : darken('#083ace', 0.2),
        },
    };

    return (
        <>
            <Button
                sx={buttonStyles}
                endIcon={<MatIcon />}
                onClick={handleClick}
            >
                {title}
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, {
                        onClick: (event) => handleMenuItemClick(event, child.props.value),
                    })
                )}
            </Menu>
        </>
    );
};

CustomButtonWithSelect.defaultProps = {
    matIcon: ArrowDropDownIcon,
};

export default CustomButtonWithSelect;
