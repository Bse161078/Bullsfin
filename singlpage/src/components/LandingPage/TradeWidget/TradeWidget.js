import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import card from "../../../assets/card.png";
import ReactScriptTag from "react-script-tag";
function TradeWidget() {
  return (
    <Grid container sx={{ padding: 15 }}>
      <Grid item xs={6} justifyContent="center" sx={{ padding: 4 }}>
        <Typography align="center" variant="h3" sx={{ fontWeight: "bold" }}>
          Trade Widget
        </Typography>
        <Card sx={{ height: "90%", width: "100%" }}>
          <CardContent>
            <div className="tradingview-widget-container">
              <div className="tradingview-widget-container__widget"></div>
              <div className="tradingview-widget-copyright">
                <a
                  href="https://www.tradingview.com/economic-calendar/"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="blue-text">Economic calendar</span>
                </a>{" "}
                by TradingView
              </div>
            </div>
            <ReactScriptTag
              type="text/javascript"
              src="https://s3.tradingview.com/external-embedding/embed-widget-events.js"
              async
              data={{
                colorTheme: "dark",
                isTransparent: false,
                width: "510",
                height: "600",
                locale: "en",
                importanceFilter: "0,1",
                currencyFilter: "CAD,EUR,GBP,USD",
              }}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={5} justifyContent="center" sx={{ padding: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          News Feed
        </Typography>
        <Card sx={{ marginTop: 2 }}>
          <CardContent style={{ display: "contents" }}>
            <Grid container>
              <Grid xs={4}>
                <img src={card} alt="News Feed" />
              </Grid>
              <Grid xs={7}>
                <Typography variant="caption" display="block">
                  20,Dec,2022
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  Can coffee make you a better developer?
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ marginTop: 2 }}>
          <CardContent style={{ display: "contents" }}>
            <Grid container sx={{ padding: 1 }}>
              <Grid xs={4}>
                <img src={card} alt="News Feed" />
              </Grid>
              <Grid xs={7}>
                <Typography variant="caption" display="block">
                  20,Dec,2022
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  Can coffee make you a better developer?
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ marginTop: 2 }}>
          <CardContent style={{ display: "contents" }}>
            <Grid container sx={{ padding: 1 }}>
              <Grid xs={4}>
                <img src={card} alt="News Feed" />
              </Grid>
              <Grid xs={7}>
                <Typography variant="caption" display="block">
                  20,Dec,2022
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  Can coffee make you a better developer?
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TradeWidget;
