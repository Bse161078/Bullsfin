import React from 'react'
import {Box,Paper,Typography} from "@mui/material";
function RebateData() {
  return (
    <Box  sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width:"100%",
          height:350,
          
        },
      }}>
    <Paper elevation={11} sx={{padding:1}} >
        <Typography variant="caption" >
        LAST REBATES 30 Days, click and drag to zoom in
        </Typography>
    </Paper>
    </Box>
  )
}

export default RebateData