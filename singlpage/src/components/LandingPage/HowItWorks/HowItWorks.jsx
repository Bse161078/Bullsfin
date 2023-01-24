import React from 'react'
import {Button, Grid,Typography} from "@mui/material"
import howItWorks from '../../../assets/howItWorks.png'
import circularButton from '../../../assets/circularButton.png'
import petition from '../../../assets/Petition.png'
import usDollar from '../../../assets/usDollar.png'
import Broker from '../../../assets/Broker.png'

function HowItWorks() {
  return (
    <Grid container>
        <Grid item xs={12} justifyContent="center" sx={{padding:5}}>
            <Typography align="center" variant="h3" sx={{fontWeight:"bold"}}>
            How it works
            </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3} justifyContent="center" >
            <img  src={howItWorks}/>
        </Grid>
        <Grid item xs={4}  >
            <Grid container  sx={{padding:2}}  >
                <Grid item xs={1}></Grid>
                <Grid item xs={4}>
                <Button
                 size="large"
                    style={{
                        borderRadius: "45%",
                        backgroundColor: "black",
                        padding: "18px 36px",
   
                    }}
                    variant="contained"
                    >
                <img  src={petition}  />
                </Button>
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="h5" sx={{fontWeight:'bold'}}>
                    Sign up fast
                    </Typography>
                    <Typography variant="subtitle1" >
                Like faster than ordering 
                </Typography>
                </Grid>
                </Grid>
                <Grid container sx={{padding:2}}>
                <Grid item xs={1}></Grid>
                <Grid item xs={4} >
                <Button
                    size="large"
                    style={{
                        borderRadius: "45%",
                        backgroundColor: "black",
                        padding: "18px 36px",

                    }}
                    variant="contained"
                    >
                <img  src={usDollar}  alt="Signin"/>
                </Button>
                </Grid>
                <Grid item xs={7}  >
                    <Typography variant="h5" sx={{fontWeight:'bold'}}>
                    Select Broker
                    </Typography>
                    <Typography variant="subtitle1" >
                    Like faster than orderit
                </Typography>
                </Grid>
                </Grid>
                <Grid container sx={{padding:2}}>
                <Grid item xs={1}></Grid>
                <Grid item xs={4} >
                <Button
                    size="large"
                    style={{
                        borderRadius: "45%",
                        backgroundColor: "black",
                        padding: "18px 36px",

                    }}
                    variant="contained"
                    >
                <img  src={Broker}  alt="Signin"/>
                </Button>
                </Grid>
                <Grid item xs={7}  sx={{padding:2}}>
                    <Typography variant="h5" sx={{fontWeight:'bold'}}>
                    Earn Profit
                    </Typography>
                    <Typography variant="subtitle1" >
                    Like faster ring takeout fast 
                        Jinesade anything
                </Typography>
                </Grid>
                </Grid>
        </Grid>
        </Grid>
  )
}

export default HowItWorks