import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Cover() {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={10} sx={{ padding: 10 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h2"
              align="center"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Get
              <span style={{ color: "black", marginLeft: 10 }}>
                Cashback
              </span>{" "}
              For EveryTrade You Make!
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Typography variant="h5" align="center" sx={{ color: "black" }}>
              Open your trading account via Bullsfin and benefit from cashback
              and other benefits immediately.
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} sx={{ padding: 4 }}>
            <Button
              style={{
                borderRadius: 35,
                backgroundColor: "black",
                padding: "18px 36px",
                fontSize: "15px",
              }}
              variant="contained"
              onClick={() => navigate("/signin")}
            >
              Get Started
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}

export default Cover;
