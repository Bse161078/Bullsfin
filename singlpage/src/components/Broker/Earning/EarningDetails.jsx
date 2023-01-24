import React from 'react';
import {Typography,Grid} from "@mui/material";
function EarningDetails() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
        <Typography variant='h6'>
        How much forex Cashback can I earn?
        </Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="subtitle1">
        Earnings will very much depend on the rebate rate of your broker, the instruments your trade as well as the volume of your trades.
        Use the calculator below to roughly estimate your earnings.
        Just as an example, with only 20 trades per day (0.1 lot size) and a rebate level of 0.5 pips, you could be making a monthly profit of $210 or a yearly profit of $2,520!
        </Typography>
        </Grid>
    </Grid>
  )
}

export default EarningDetails