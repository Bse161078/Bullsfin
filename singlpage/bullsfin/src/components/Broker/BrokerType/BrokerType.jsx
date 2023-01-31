import React,{useState} from 'react'
import {Button,ButtonGroup} from "@mui/material"
function BrokerType() {
  const [isSelected,setSelected] = useState("Forex");
  return (
    <div>
      <ButtonGroup >
        <Button sx={{background:isSelected==="Forex"?'#A97C50':'white',color:isSelected==="Forex"?"white":'black',borderColor:'black',':hover':{
          color:isSelected==="Forex"?'white':'black',
          background:isSelected==="Forex"?"#A97C50":'white',
          borderColor:'black'
        }}} onClick={()=>{
          setSelected("Forex")
        }}>
            Forex Broker
        </Button>
        <Button sx={{background:isSelected==="Crypto"?'#A97C50':"white",color:isSelected==="Crypto"?"white":'black',borderColor:'black',':hover':{
          color:isSelected==="Crypto"?'white':'black',
          background:isSelected==="Crypto"?"#A97C50":'white',
          borderColor:'black'
        }}} onClick={()=>{
          setSelected("Crypto")
        }}>
            Crypto Broker
        </Button>
        </ButtonGroup>
    </div>
  )
}

export default BrokerType