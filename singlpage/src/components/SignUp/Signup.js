import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../LandingPage/Navbar/MainNavbar";
import { firebase } from "../../Firebase/config";

import { message, notification } from "antd";

function Signup() {
  const navigate = useNavigate();
  const handleOnClick = (link) => navigate(link);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      message.error("Passwords do not match");
      return;
    }

    if (!terms) {
      message.error("You must accept terms and conditions");
      console.error("You must accept terms and conditions");
      return;
    }

    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set({ firstName, lastName });
      const token = await user.getIdToken();
      localStorage.setItem("token", token);
      navigate("/home");
      notification.success({
        message: "Logged in!",
        key: "logged_in",
        style: {
          borderRadius: "15px",
        },
      });
    } catch (error) {
      console.log(error.message);
      //   notification.error(error.message);
      notification.error({ message: error.message, key: "logged_in" });
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <MainNavbar />
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8} sx={{ padding: 10 }}>
        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Typography align="center" variant="h3">
                    Sign Up
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    align="center"
                    variant="h5"
                    sx={{ cursor: "pointer" }}
                  >
                    Already have an account
                  </Typography>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={5} sx={{ padding: 2 }}>
                  <TextField
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    label="FirstName"
                    type="text"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={5} sx={{ padding: 2 }}>
                  <TextField
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    label="LastName"
                    type="text"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={5} sx={{ padding: 2 }}>
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    type="email"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={5} sx={{ padding: 2 }}>
                  <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    type="password"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={3}></Grid>

                <Grid item xs={5} sx={{ padding: 2 }}>
                  <TextField
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    label="Confirm Password"
                    type="password"
                    variant="standard"
                    fullWidth
                  />
                  <div className="mt-5"></div>
                  <input
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                  />{" "}
                  I agree to the Terms of Service & Privacy Policy
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={1} justifyContent="center"></Grid>
                <Grid xs={6} sx={{ marginTop: 1.5 }}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={3}></Grid>
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
                      handleOnClick("/SignIn");
                    }}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={3} sx={{ padding: 2 }}>
                  <Button
                    variant="outlined"
                    style={{
                      borderRadius: 35,
                      backgroundColor: "#A97C50",
                      padding: "18px 36px",
                      fontSize: "15px",
                      color: "white",
                      borderColor: "#A97C50",
                    }}
                    type="submit"
                    // onClick={() => {
                    //   handleOnClick("/Home");
                    // }}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      </Grid>
    </Grid>
  );
}

export default Signup;
