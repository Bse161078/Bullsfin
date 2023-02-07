import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import MainNavbar from "../LandingPage/Navbar/MainNavbar";
import googleLogo from "../../assets/googleLogo.png";
import fbLogo from "../../assets/fbTransparent.png";
import { firebase } from "../../Firebase/config";
import { socialMediaAuth } from "../../Firebase/utils";

import { notification } from "antd";
function Signin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleOnClick = (link) => navigate("/" + link);

  const handleLogin = async (e) => {
    debugger;
    e.preventDefault();
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      navigate("/home");
      console.log("User logged in:", user.user.email);
      return true;
    } catch (error) {
      console.error("Login failed:", error.message);
      return false;
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Grid container sx={{}}>
        <Grid item xs={12}>
          <MainNavbar />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8} sx={{ padding: 10 }}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Typography align="center" variant="h3">
                    Sign In
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography align="center" variant="h5">
                    New User? Create an account
                  </Typography>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={5} sx={{ padding: 2 }}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="standard"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={5} sx={{ padding: 2 }}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="standard"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={3} sx={{ padding: 2 }}>
                  <Button
                    variant="outlined"
                    style={{
                      borderRadius: 35,
                      backgroundColor: "#505050",
                      padding: "18px 36px",
                      fontSize: "15px",
                      color: "white",
                      borderColor: "#505050",
                    }}
                    onClick={() => {
                      handleOnClick("SignUp");
                    }}
                  >
                    Signup
                  </Button>
                </Grid>
                <Grid item xs={3} sx={{ padding: 2 }}>
                  <Button
                    type="submit"
                    style={{
                      borderRadius: 35,
                      backgroundColor: "#A97C50",
                      padding: "18px 36px",
                      fontSize: "15px",
                      color: "white",
                      borderColor: "#A97C50",
                    }}
                    variant="outlined"
                  >
                    Signin
                  </Button>
                </Grid>

                <Grid item xs={5}>
                  <Divider flexItem sx={{ borderBottomWidth: 5 }} />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                  Or
                </Grid>
                <Grid item xs={5}>
                  <Divider flexItem sx={{ borderBottomWidth: 5 }} />
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={8} sx={{ padding: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      borderRadius: 10,
                      color: "white",
                      background: "white",
                      color: "black",
                    }}
                  >
                    <img src={googleLogo} style={{ marginRight: 10 }} />
                    Continue with Google
                  </Button>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={8} sx={{ padding: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{ borderRadius: 10, background: "#A97C50" }}
                    //   onClick={() => socialMediaSignIn(facebookProvider)}
                  >
                    <img src={fbLogo} style={{ marginRight: 10 }} />
                    Continue with Facebook
                  </Button>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
}

export default Signin;
