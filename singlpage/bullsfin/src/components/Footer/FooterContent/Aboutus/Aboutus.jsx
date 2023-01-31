import React from 'react'
import {Typography} from "@mui/material"
import Logo from '../../../../assets/logoB.png'
import fb from '../../../../assets/fb.png'
import insta from '../../../../assets/insta.png'
import twitter from '../../../../assets/twitter.png'
import linkdin from '../../../../assets/linkdin.png'

function Aboutus() {
  return (
    <div>
        <img src={Logo} />
        <Typography variant="subtitle1" sx={{color:'white'}}style={{marginTop:10}}>
        Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. 
        </Typography>
        <span >
            <img src={fb}style={{marginTop:20}}/>
            &nbsp
            <img src={twitter}/>
            &nbsp
            <img src={insta}/>
            &nbsp
            <img src={linkdin}/>
        </span>
    </div>
  )
}

export default Aboutus