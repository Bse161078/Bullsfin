import React from 'react'
import {Grid} from "@mui/material"
import BrokersDetails from './BrokersDetails/BrokersDetails'
import Sidebar from '../Sidebar/Sidebar'
function BrokersInfo() {
  return (
    <div>
        <Sidebar/>
        <BrokersDetails/>
    </div>
  )
}

export default BrokersInfo