import React from 'react'
import {Typography} from "@mui/material"
function Pages() {
  return (
    <div style={{color:'white'}}>
        <Typography variant = "h5">
            Pages
        </Typography>
        <Typography variant = "subtitle1" sx={{marginTop:1}}>
            How it works
        </Typography>
        <Typography variant = "subtitle1">
            Pricing
        </Typography>
        <Typography variant = "subtitle1">
            Blogs
        </Typography>
        <Typography variant = "subtitle1">
            Demo
        </Typography>
    </div>
  )
}

export default Pages