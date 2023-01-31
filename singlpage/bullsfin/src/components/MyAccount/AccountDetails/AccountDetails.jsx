import React,{useState} from 'react'
import {Box,Paper, Button, Typography,Grid} from "@mui/material";
import AddAccount from '../AddAccount/AddAccount';
function AccountDetails(props) {
  const {setShowAddAccount} = props
  return (
    <Box  sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width:"100%",
          minHeight:350,
        },
      }}>


    <Paper elevation={11} sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
        <Grid container>
            <Grid item xs={4}></Grid>
            <Grid item xs={8}><Typography>You don’t have any accounts currently.</Typography>
           
            </Grid> 
            <Grid item xs={5}></Grid>
            <Grid item xs={7}>
            
            <Button size="large" sx={{ color:"white" ,background:'#A97C50',borderRadius:28,
                ':hover': {
                    bgcolor: '#A97C50',
                    color: 'white'}
                
            }}
            onClick={()=>{
              setShowAddAccount(true)
            }}
             >
                 Add Account
            </Button>

            </Grid>
      
        </Grid>
    </Paper>

    </Box>
  )
}

export default AccountDetails