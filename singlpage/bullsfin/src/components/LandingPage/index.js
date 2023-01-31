import MainNavbar from './Navbar/MainNavbar'
import Navbar from './Navbar/Navbar'
import HowItWorks from './HowItWorks/HowItWorks'
import Calculator from './RebateCalculator/Calculator'
import Reviews from './Reviews/Reviews'
import TradeWidget from './TradeWidget/TradeWidget'
import About from './AboutBullsfin/About'
import Cover from './Cover/Cover'
import React from 'react'
import {Grid} from "@mui/material"
import FooterContent from '../Footer/FooterContent/FooterContent'
export default function index() {
  return (
    <Grid container>
      <Grid item xs={12} >
        <Navbar/>
        </Grid>
        <Grid item xs={12} sx={{background:"#A97C50"}} >
          <MainNavbar/>
        </Grid>
        <Grid item xs={12}  sx={{background:"#A97C50"}}>
        <Cover/>
        </Grid>
        <Grid item xs={12}  >
        <About/>
        </Grid>
        <Grid item xs={12}  >
        <HowItWorks/>
        </Grid>
        <Grid item xs={12}  >
        <TradeWidget/>
        </Grid>
        <Grid item xs={3}  ></Grid>
        <Grid item xs={9}  >
        <Calculator/>
        </Grid>
        <Grid item xs={12}  >
        <Reviews/>
        </Grid>
        
        </Grid>
  )
}
