import React from "react";
import { Paper, Box, Grid, Typography, Divider, Button } from "@mui/material";
import FBS from "../../../assets/FBS.png";
import { useNavigate } from "react-router-dom";
function BrokersList({ broker, ind, navigation }) {
  console.log(broker);
  const navigate = useNavigate();

  return (
    <Box
      key={ind}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 200,
        },
      }}
    >
      <Paper elevation={12}>
        <Grid container sx={{ padding: 2 }}>
          <Grid item xs={4}>
            <img
              className="w-100"
              style={{ height: "100px", width: "100px", objectFit: "cover" }}
              src={broker.brokerImages}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container justifyContent="space-between">
              <Grid item xs={4}>
                <Typography variant="subtitle2" fontWeight="bold">
                  Standard MT4/MT5
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2" fontWeight="bold">
                  Raw Speed
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2" fontWeight="bold">
                  CTrader
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2">
                  {broker?.Standard_MT4_MT5}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2">{broker.Raw_Spead}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2">${broker.CTrader}</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                className="mt-4 gap-4"
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <a
                  href={broker.brokerLink}
                  target="_blank"
                  //   rel="noopener noreferrer"
                >
                  <Button
                    sx={{
                      background: "black",
                      color: "white",
                      borderRadius: 22,
                      ":hover": {
                        background: "black",
                        color: "white",
                      },
                    }}
                  >
                    Add Account
                  </Button>
                </a>
                <Button
                  sx={{
                    background: "#ebf5ed",
                    color: "#3A974C",
                    borderRadius: 22,
                    ":hover": {
                      background: "#ebf5ed",
                      color: "#3A974C",
                    },
                  }}
                  onClick={() => {
                    // navigate(
                    //   `/BrokerProfile?data=${encodeURIComponent(
                    //     JSON.stringify(broker)
                    //   )}`
                    // );
                    navigate("/BrokerProfile", {
                      replace: true,
                      state: { broker: broker },
                    });
                  }}
                >
                  More Information
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default BrokersList;
