import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { styled } from '@mui/material/styles'


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
    },
    '.MuiOutlinedInput-input': {
        padding: '10px 14px !important'
    }
}))

const CustomTextField = ({ placeholder, iconMat, variant, className, value,onChange }) => {
    return (
        <>
            <MatTextField
                variant={variant}
                placeholder={placeholder}
                className={className}
                value={value}
                onChange={onChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {iconMat}
                        </InputAdornment>
                    ),
                }}
                style={{ width: '100%' }}
            />
        </>
    )
}

export default CustomTextField