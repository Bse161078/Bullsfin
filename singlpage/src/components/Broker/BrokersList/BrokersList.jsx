import React from 'react'
import {Paper,Box,Grid, Typography,Divider,Button} from '@mui/material'
import FBS from '../../../assets/FBS.png'
function BrokersList() {
  return (
    <Box  sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width:"100%",
          height:200
        },
      }}>
        <Paper elevation={12}>
            <Grid container sx={{padding:2}}>
                <Grid item xs={4} >
                <img src={FBS} />
                </Grid>
                <Grid item xs={8}>
                    <Grid container  justifyContent="space-between">
                        <Grid item xs={4}>
                    <Typography variant="subtitle2" fontWeight="bold">
                        Standard MT4/MT5
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography variant="subtitle2" fontWeight="bold">
                        Raw Speed
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography variant="subtitle2" fontWeight="bold">
                       CTrader
                    </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider/>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography variant="subtitle2">
                        Up to 0.409
                        Pips/Round Turn Lot
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography variant="subtitle2">
                        37.3% of 
                        commision
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography variant="subtitle2">
                     $ 4.09/ Million
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{display:'flex',justifyContent:'flex-end'}} >
                        <Button sx={{background:'black',color:'white',borderRadius:22,':hover':{
                            background:'black',color:'white'
                        }}}>
                            Add Account
                        </Button>
                        <Button sx={{background:'#ebf5ed',color:'#3A974C',borderRadius:22,':hover':{
                            background:'#ebf5ed',color:'#3A974C'
                        }}}>
                            More Information
                        </Button>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </Box>
  )
}

export default BrokersList