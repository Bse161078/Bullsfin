import React from 'react'
import {Box,Paper} from "@mui/material"
import FBS from '../../../assets/FBS.png'
function BrokersDetails() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        padding: 3,
      },
    }}
  >
    <img src={FBS}/>
    FBS
  </Box>
  )
}

export default BrokersDetails