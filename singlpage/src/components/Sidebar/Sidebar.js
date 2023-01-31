import React, { useState, useEffect } from "react";
import { Paper, Box, Typography } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BuildIcon from "@mui/icons-material/Build";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [iconColor, setIconColor] = useState("Dashboard");
  const navigate = useNavigate();
  const handleOnClick = (link) => navigate("/" + link);
  useEffect(() => {});
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          padding: 3,
        },
      }}
    >
      <Paper elevation={11}>
        <Typography
          variant="subtitle1"
          sx={{ padding: 2, cursor: "pointer" }}
          onClick={() => {
            setIconColor("Dashboard");
            handleOnClick("Dashboard");
          }}
        >
          <GridViewIcon
            sx={{
              background: iconColor === "Dashboard" && "#A97C50",
              marginRight: 1,
            }}
          />
          Dashboard
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ padding: 2, cursor: "pointer" }}
          onClick={() => {
            setIconColor("My");
            handleOnClick("MyAccount");
          }}
        >
          <AccountBoxIcon
            sx={{ background: iconColor === "My" && "#A97C50", marginRight: 1 }}
          />
          My Account
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ padding: 2, cursor: "pointer" }}
          onClick={() => {
            handleOnClick("Broker");
            setIconColor("Brokers");
          }}
        >
          <BrokenImageIcon
            sx={{
              background: iconColor === "Brokers" && "#A97C50",
              marginRight: 1,
            }}
          />
          Brokers
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ padding: 2, cursor: "pointer" }}
          onClick={() => {
            setIconColor("Withdraw");
            handleOnClick("withdraw");
          }}
        >
          <AccountBalanceIcon
            sx={{
              background: iconColor === "Withdraw" && "#A97C50",
              marginRight: 1,
            }}
          />
          Withdraw
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ padding: 2, cursor: "pointer" }}
          onClick={() => {
            setIconColor("Tools");
          }}
        >
          <BuildIcon
            sx={{
              background: iconColor === "Tools" && "#A97C50",
              marginRight: 1,
            }}
          />
          Tools
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ padding: 2, cursor: "pointer" }}
          onClick={() => {
            setIconColor("support");
            handleOnClick("support");
          }}
        >
          <SupportIcon
            sx={{
              background: iconColor === "Support" && "#A97C50",
              marginRight: 1,
            }}
          />
          Support
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ padding: 2, cursor: "pointer" }}
          onClick={() => {
            setIconColor("Logout");
          }}
        >
          <LogoutIcon
            sx={{
              background: iconColor === "Logout" && "#A97C50",
              marginRight: 1,
            }}
          />
          Logout
        </Typography>
      </Paper>
    </Box>
  );
}

export default Sidebar;
