import React from 'react'
import {Grid} from '@mui/material'
import Sidebar from '../Sidebar/Sidebar';
import MainNavbar from '../LandingPage/Navbar/MainNavbar';
import BrokerType from './BrokerType/BrokerType';
import EarningDetails from './Earning/EarningDetails';
import BrokersList from './BrokersList/BrokersList';
import Calculator from '../LandingPage/RebateCalculator/Calculator';
import ForexSearch from './ForexSearch/ForexSearch';
function Broker() {
  return (
    <Grid container>
        <Grid item xs={12}>
          <MainNavbar/>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={0.2}></Grid>
          <Grid item xs={2.8}>
          <Sidebar/>
          </Grid>
          <Grid item xs={9} >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <BrokerType/>
                </Grid>
                <Grid item xs={12}>
                    <EarningDetails/>
                </Grid>
                <Grid item xs={7}>
                    <BrokersList/>
                    <BrokersList/>
                </Grid>
                
                <Grid item xs={5}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                  <Calculator/>
                  </Grid>
                  <Grid item xs={12}>
                  <ForexSearch/>
                  </Grid>
                  </Grid>
                </Grid>
            </Grid>
          </Grid>
          </Grid>
          </Grid>
        </Grid>
  )
}

export default Broker