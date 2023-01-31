import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import TradingViewWidget from "../../../TradingViewWidget";

function Navbar() {
  return (
    <div>
      <TradingViewWidget />
    </div>
  );
}

export default Navbar;
