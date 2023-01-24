import React from 'react'
import {Card,CardContent,Typography,Grid} from "@mui/material"
function ForexSearch() {
  return (
    <Grid container>
        <Grid item xs={10}>
            <Card >
                <CardContent elevation={11}>
                    <Typography variant ='h6'>
                    Forex cashback search
                    </Typography>
                    <Typography variant ='subtitle1'>
                    General Information
                    </Typography>
                </CardContent>    
            </Card>
            </Grid>

    </Grid>
  )
}

export default ForexSearch