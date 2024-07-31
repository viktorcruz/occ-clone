import { Card } from "@mui/material"
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'


const MatCard = styled(Card)({
    margin: '20px 0',
    width: '100%',
})

export const MotionCard = motion(MatCard)