import React from 'react'
import phone from '../../../../assets/phone.png'
import email from '../../../../assets/mail.png'
import location from '../../../../assets/location.png'
import  {Typography} from "@mui/material"

function Contactus() {
  return (
    <div style={{color:'white'}}>
        <Typography variant = "h5">
            Contact us
        </Typography>
        <Typography variant = "subtitle1" sx={{marginTop:1}}>
        <img src={phone} style={{marginRight:10}}/>
        (406) 555-0120
        </Typography>
        <Typography variant = "subtitle1">
        <img src={email}style={{marginRight:10}}/>
        mangcoding123@gmail.com
        </Typography>
        <Typography variant = "subtitle1">
        <img src={location}style={{marginRight:10}}/>
        2972 Westheimer Rd. Santa Ana, Illinois 85486 
        </Typography>
       
    </div>
  )
}

export default Contactus