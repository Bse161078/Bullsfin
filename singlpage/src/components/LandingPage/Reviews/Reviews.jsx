import React from 'react'
import {Grid,Typography} from "@mui/material"
function Reviews() {
  return (
    <Grid container sx={{marginBottom:5}}>
        <Grid item xs={12} justifyContent="center" sx={{padding:4}}>
            <Typography align="center" variant='h4'>
                This is what our Client says
            </Typography>
        </Grid>
        <Grid item xs={12}  sx={{background:"#A97C50",padding:4}}>
            <Grid container>
           <Grid item xs={4}>
            <Typography variant="h4" align="center" sx={{color:'white'}}>
            “A service every trader muse use"
            </Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography variant="h4" align="center" sx={{color:'white'}}>
            “Well done! A great service from a great company!"
            </Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography variant="h4" align="center" sx={{color:'white'}}>
            “I got my profit every month!"
            </Typography>
            </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Reviews