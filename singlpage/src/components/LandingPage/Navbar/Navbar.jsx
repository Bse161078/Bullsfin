import React from 'react'
import {Grid,Paper,Typography} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';

function Navbar() {
  return (
    <div >
     <Grid container>
     
    <Grid item xs={3} sx={{padding:'5px'}}>
        <Paper sx={{backgrund:"red",padding:"10px",}}>
            <Grid container justifyContent="center">

                <Grid item xs={4}>
            <Typography variant="subtitle1">
            S&P 500
        </Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography variant="subtitle1">
            38660
        </Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography variant="subtitle1" sx={{color:'red'}}>
            -20(-0.21)
        </Typography>
        </Grid>
            </Grid>
        </Paper>
   
    </Grid>
    <Grid item xs={3} sx={{padding:'5px'}}>
    <Paper sx={{backgrund:"red",padding:"10px",}}>
            <Grid container justifyContent="center">
            <Grid item xs={4}>
            <Typography variant="subtitle1">
            S&P 500
        </Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography variant="subtitle1">
            38660
        </Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography variant="subtitle1" sx={{color:'red'}}>
            -20(-0.21)
        </Typography>
        </Grid>
            </Grid>
        </Paper>
    </Grid>
    <Grid item xs={3} sx={{padding:'5px'}}>
    <Paper sx={{backgrund:"red",padding:"10px",}}>
            <Grid container justifyContent="center">
            <Grid item xs={4}>
            <Typography variant="subtitle1">
            S&P 500
        </Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography variant="subtitle1">
            38660
        </Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography variant="subtitle1" sx={{color:'red'}}>
            -20(-0.21)
        </Typography>
        </Grid>
            </Grid>
        </Paper>

    </Grid>
    <Grid item xs={3} sx={{padding:'5px'}}>
    <Paper sx={{backgrund:"red",padding:"10px",}}>
            <Grid container justifyContent="center">
            <Grid item xs={4}>
            <Typography variant="subtitle1">
            S&P 500
        </Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography variant="subtitle1">
            38660
        </Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography variant="subtitle1" sx={{color:'red'}}>
            -20(-0.21)
        </Typography>
        </Grid>
            </Grid>
        </Paper>

    </Grid>

    </Grid>
    </div>
  )
}

export default Navbar