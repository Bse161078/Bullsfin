import React,{useState} from 'react'
import {Grid,Typography,Card,CardContent,Button,ButtonGroup,Slider} from "@mui/material"
function Calculator() {
    const[isSelectedUnit,setIsSelectedUnit] = useState("Pips")
    const[isSelectedLots,setIsSelectedLots] = useState(1)
  return (
    <Grid container >
        <Grid item xs={10}>
        <Typography align={window.location.href.includes("/Broker")?'left':'center'} variant={window.location.href.includes("/Broker")?"subtitle1":"h2"}>
            Rebate Calculator
        </Typography>
        </Grid>
        <Grid item xs={2}></Grid>

        <Grid item xs={10} >
            <Card sx={{height:"100%",width:'100%'}} >
               <CardContent >
               <Grid container direction="column"  >
               
                <Grid xs={12}  sx={{display:'flex',justifyContent:'space-between'}} >
                <Typography variant="subtitle2">
                Units
                </Typography>
                <ButtonGroup>
                    <Button sx={{background:isSelectedUnit==="Pips"?'#A97C50':'white',color:isSelectedUnit==="Pips"?'white':'black',borderColor:'black',":hover":{
                        background:isSelectedUnit==="Pips"?'#A97C50':'white',color:isSelectedUnit==="Pips"?'white':'black',borderColor:'black'
                    }}}onClick={()=>{
                        setIsSelectedUnit("Pips")
                    }}>Pips</Button>
                    <Button sx={{background:isSelectedUnit==="USD"?'#A97C50':'white',color:isSelectedUnit==="USD"?'white':'black',borderColor:'black',":hover":{
                        background:isSelectedUnit==="USD"?'#A97C50':'white',color:isSelectedUnit==="USD"?'white':'black',borderColor:'black'
                    }}}onClick={()=>{
                        setIsSelectedUnit("USD")
                    }}
                    >USD</Button>
                    </ButtonGroup> 
                    </Grid> 
                   
                <Grid xs={12} sx={{display:'flex',justifyContent:'space-between'}}  >
                <Typography variant="subtitle2">
                    Lots
                </Typography>
                <ButtonGroup>
                    <Button sx={{backgroundColor:isSelectedLots===1?"#A97C50":'white',color:isSelectedLots===1?'white':'black',borderColor:'black',":hover":{
                        backgroundColor:isSelectedLots===1?'#A97C50':"white",color:isSelectedLots===1?'white':'black',borderColor:'black'
                    }}}onClick={()=>{
                        setIsSelectedLots(1)
                    }}>1</Button>
                    <Button  sx={{backgroundColor:isSelectedLots===0.01?"#A97C50":'white',color:isSelectedLots===0.01?'white':'black',borderColor:'black',":hover":{
                        backgroundColor:isSelectedLots===0.01?'#A97C50':"white",color:isSelectedLots===0.01?'white':'black',borderColor:'black'
                    }}}onClick={()=>{
                        setIsSelectedLots(0.01)
                    }}>0.01</Button>
                    <Button  sx={{backgroundColor:isSelectedLots===0.02?"#A97C50":'white',color:isSelectedLots===0.02?'white':'black',borderColor:'black',":hover":{
                        backgroundColor:isSelectedLots===0.02?'#A97C50':"white",color:isSelectedLots===0.02?'white':'black',borderColor:'black'
                    }}}onClick={()=>{
                        setIsSelectedLots(0.02)
                    }}>0.02</Button>
                    </ButtonGroup> 
                    </Grid> 
                    
                <Grid xs={12}sx={{display:'flex',justifyContent:'space-between'}} >
                <Typography variant="subtitle2">
                            Trades per day
                </Typography>
                <Slider sx={{color:"#A97C50"}} defaultValue={30} step={10} marks min={10} max={110} valueLabelDisplay="auto" />

                    </Grid> 
                    <Grid xs={12}sx={{display:'flex',justifyContent:'space-between'}} >
                <Typography variant="subtitle2">
                            Rebate
                </Typography>
                <Slider sx={{color:"#A97C50"}}  defaultValue={30} step={10} marks min={10} max={110} valueLabelDisplay='auto' />
                    </Grid> 
                    </Grid> 
              </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}

export default Calculator