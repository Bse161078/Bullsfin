import React from 'react'
import {Paper,Box,Grid,Typography} from "@mui/material"
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
function UserProfit() {
  return (
    <Box  sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
        },
      }}>
        <Grid container >
            <Grid item xs={3.5}>
    <Paper>
      <Grid container sx={{padding:2}}>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={3}>
        <MonetizationOnOutlinedIcon/>
      </Grid>
      <Grid item xs={2}>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">
      $ 178 
      </Typography>
      <Typography variant="caption" >Total Profit</Typography>
      </Grid>
      </Grid>
    </Paper>
    </Grid>
    <Grid item xs={0.5}></Grid>
    <Grid item xs={3}>
    <Paper>
      <Grid container sx={{padding:2}}>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={3}>
        <PendingActionsOutlinedIcon/>
      </Grid>
      <Grid item xs={2}>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">
      $ 178 
      </Typography>
      <Typography variant="caption" >Total Profit</Typography>
      </Grid>
      </Grid>
    </Paper>
    </Grid>
    <Grid item xs={0.5}></Grid>
    <Grid item xs={3.5}>
    <Paper>
      <Grid container sx={{padding:2}}>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={3}>
        <AccountBalanceOutlinedIcon/>
      </Grid>
      <Grid item xs={2}>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">
      $ 178 
      </Typography>
      <Typography variant="caption" >Total Profit</Typography>
      </Grid>
      </Grid>
    </Paper>
    </Grid>
    <Grid item xs={0.5}></Grid>

    </Grid>
    
    </Box>
  )
}

export default UserProfit