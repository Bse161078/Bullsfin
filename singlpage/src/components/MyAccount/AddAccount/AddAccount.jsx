import React from 'react'
import {Box,Paper, Typography,Grid,TextField,Button} from "@mui/material"
import {
    withStyles,
  } from '@material-ui/core/styles';
function AddAccount(props) {
    
    const {setShowAddAccount} = props

    const CssTextField = withStyles({
        root: {
          '& label.Mui-focused': {
            color: 'black',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black',
            },
            '&:hover fieldset': {
              borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
          },
        },
      })(TextField);
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
        <Paper sx={{padding:2}}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography align="center" variant='h4'>
            Add Account
        </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
        <CssTextField
          label="Name"
          
          maxRows={2}
        />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
        <CssTextField  label="Account no" />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
        <Button sx={{display:'flex',justifyContent:"center",background:'#A97C50',color:'white',":hover":{
            background:'#A97C50',color:'white'
        }}}onClick={()=>setShowAddAccount(false)}>
            Submit
        </Button>
        </Grid>
        <Grid item xs={5}><Button sx={{color:'black'}}onClick={()=>setShowAddAccount(false)}>
            Cancel
        </Button></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
        
        </Grid>
    </Grid>
    </Paper>
    </Box>
  )
}

export default AddAccount