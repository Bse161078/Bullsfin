import React from 'react'
import {Grid} from '@mui/material'
import Sidebar from '../Sidebar/Sidebar';
import MainNavbar from '../LandingPage/Navbar/MainNavbar';
import UserProfit from './UserProfit/UserProfit';
import RebateData from './RebatedData/RebateData';
import RecentRebatesTable from './RebatedData/RecentRebatesTable';
function Dashboard() {
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
          <Grid container >
          <Grid item xs={12}>
          <UserProfit/>
          </Grid>
          <Grid item xs={7}>
          <RebateData/>
          </Grid>
          <Grid item xs={0.5}></Grid>
          <Grid item xs={3.5}>
            <RecentRebatesTable/>
          </Grid>
          </Grid>
        </Grid>
       
        
        </Grid>
        </Grid>
       
      
        </Grid>
  )
}

export default Dashboard