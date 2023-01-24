import React from 'react'
import {Grid,Box,Paper,Typography,Button,Table,TableBody,TableHead,TableCell,TableContainer,TableRow} from "@mui/material"

function createData(ticketno, closing, rebate) {
    return { ticketno, closing, rebate };
  }
  
  const rows = [
    createData("#876364", "03-11-2022 20:33:11", 6.0),
    createData('#876365', "03-11-2022 20:33:11", 9.0),
    createData('#876366', "03-11-2022 20:33:11", 16.0),
    createData('#876367', "03-11-2022 20:33:11", 3.7),
    createData('#876368', "03-11-2022 20:33:11", 16.0),
    createData('#876368', "03-11-2022 20:33:11", 16.0),
    createData('#876368', "03-11-2022 20:33:11", 16.0),
    createData('#876368', "03-11-2022 20:33:11", 16.0),

  ];

function RecentRebatesTable() {
  return (
    <Box  sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width:"100%",
        },
      }}>
        <Paper elevation={12}>
            <Grid container>
                <Grid item xs={12} sx={{background:'#DAC9AE99',padding:1}}>
                    <Grid container>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={6}>
                    <Typography variant="subtitle1">
                    Recent Rebates
                    </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Button size="small" sx={{borderRadius:'22px',color:"#A97C50"}}>
                        View All
                    </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                <TableContainer component={Paper} sx={{ height:350 }}>
      <Table  aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Ticketno.</TableCell>
            <TableCell align="center">Closing time</TableCell>
            <TableCell align="center">Rebate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ticketno}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ticketno}
              </TableCell>
              <TableCell align="center">{row.closing}</TableCell>
              <TableCell align="center">{row.rebate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </Grid>
            </Grid>

        </Paper>
    </Box>
  )
}

export default RecentRebatesTable