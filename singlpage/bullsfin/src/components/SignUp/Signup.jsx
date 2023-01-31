import React from 'react'
import {Grid,Typography,Card,CardContent,TextField, Button,Divider, Checkbox} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import MainNavbar from '../LandingPage/Navbar/MainNavbar';

function Signup() {
    const navigate = useNavigate();
    const handleOnClick = (link) => navigate(link);
  return (
    <Grid container  >
        <Grid item xs={12}>
            <MainNavbar/>
        </Grid>
    <Grid item xs={2}></Grid>
    <Grid item xs={8} sx={{padding:10}}>
        <Card>
            <CardContent >
                <Grid container >
                    <Grid item xs={12} >
            <Typography align='center' variant='h3'>
            Sign Up
        </Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography align='center' variant='h5' sx={{cursor:'pointer'}}>
            Already have an account
        </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={5} sx={{padding:2}}>
        <TextField label="FirstName" type="text" variant="standard" fullWidth />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={5} sx={{padding:2}}>
        <TextField label="LastName" type="text" variant="standard" fullWidth />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={5} sx={{padding:2}}>
        <TextField label="Email" type="email" variant="standard" fullWidth />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={5} sx={{padding:2}}>
        <TextField label="Password" type="password" variant="standard" fullWidth  />
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={3}></Grid>
    
        <Grid item xs={5} sx={{padding:2}}>
        <TextField label="Confirm Password" type="password" variant="standard" fullWidth  />
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={1} justifyContent='center'>
            <Checkbox/>
        </Grid>
        <Grid xs={6} sx={{marginTop:1.5}}>
            I agree to the Terms of Service & Privacy Policy
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}sx={{padding:2}}>
            <Button variant="outlined"
              style={{
                borderRadius: 35,
                backgroundColor: "#505050",
                padding: "18px 36px",
                fontSize: "15px",
                color:"white",
                borderColor:'#505050'
            }}
            onClick={()=>{
                handleOnClick('/SignIn')
            }}
            >
                Back
            </Button>
        </Grid>
        <Grid item xs={3} sx={{padding:2}}>
        <Button variant="outlined"
        style={{
            borderRadius: 35,
            backgroundColor: "#A97C50",
            padding: "18px 36px",
            fontSize: "15px",
            color:'white',
            borderColor:'#A97C50'
        }}
        onClick={()=>{
            handleOnClick('/Home')
        }}
        >
                Register
            </Button>
        </Grid>
        

        </Grid>
     
        </CardContent>
        </Card>
    </Grid>
    
</Grid>
  )
}

export default Signup