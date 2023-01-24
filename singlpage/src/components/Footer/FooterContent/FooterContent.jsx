import React from 'react'
import  {Grid} from "@mui/material"
import Aboutus from './Aboutus/Aboutus'
import Pages from "./Pages/Pages"
import Services from './Services/Services'
import Contactus from './Contactus/Contactus'
function FooterContent() {
  return (
    <Grid container sx={{background:"black",padding:7}}>
        <Grid item xs={0.25}>
        </Grid>
        <Grid item xs={6}>
            <Aboutus/>
        </Grid>
        <Grid item xs={0.5}>
        </Grid>
        <Grid item xs={1}>
            <Pages/>
        </Grid>
        <Grid item xs={0.5}>
        </Grid>
        <Grid item xs={1}>
            <Services/>
        </Grid>
        <Grid item xs={0.5}>
        </Grid>
        <Grid item xs={2.25}>
            <Contactus/>
        </Grid>
    </Grid>
  )
}

export default FooterContent