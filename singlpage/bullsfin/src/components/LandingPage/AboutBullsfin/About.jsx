import React from 'react'
import {Grid,Typography} from "@mui/material"
function About() {
  return (
    <Grid container>
        <Grid item xs={12} justifyContent="center" sx={{padding:5}}>
            <Typography align="center" variant="h3" sx={{fontWeight:"bold"}}>
                About BullsFin
            </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} justifyContent="center" >
            <Typography align="center" variant="subtitle1" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae congue eu consequat ac felis donec et. A scelerisque purus semper eget duis at tellus at. Consequat ac felis donec et odio pellentesque diam volutpat.
            </Typography>
        </Grid>
        </Grid>
  )
}

export default About