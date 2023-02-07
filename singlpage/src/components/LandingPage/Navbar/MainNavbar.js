import React, { useState, useMemo } from "react";
import { Button, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import DayNightToggle from "react-day-and-night-toggle";
import logo from "../../../assets/logo.png";
import logoB from "../../../assets/logoB.png";
import { Link, useNavigate } from "react-router-dom";
import { firebase } from "../../../Firebase/config";
import { notification } from "antd";

function MainNavbar() {
  const [mode, setMode] = useState("light");
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const history=useHistory()
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/SignIn");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: mode,
          background: {
            dark: "hsl(230, 17%, 14%)",
            light: "#F7F4EF",
          },
        },
      }),
    [mode]
  );
  const userValid = () => {
    const user = firebase.auth().currentUser;
    if (user) {
      console.log("Token is valid. User:", user);
      return true;
    } else {
      return false;
    }
  };
  console.log(userValid());
  return (
    <div>
      <Grid container sx={{ padding: 6 }}>
        <Grid item xs={2}>
          <img src={window.location.href.includes("/") ? logo : logoB} />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={9}>
          <Grid container>
            <>
              <Grid item xs={2}>
                <Button
                  onClick={() => navigate("/Home")}
                  variant="h6"
                  sx={{ cursor: "pointer" }}
                >
                  Home
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  onClick={() => {
                    firebase.auth().onAuthStateChanged(function (user) {
                      if (user) {
                        navigate("/Broker");

                        // console.log("Token is valid. User:", user);
                      } else {
                        console.error("Token is invalid");
                        navigate("/signin");
                      }
                    });
                    // localStorage.getItem("token")
                    // navigate("/Broker")
                  }}
                  variant="h6"
                  sx={{
                    cursor: "pointer",
                    color: "#000",
                    textDecoration: "none",
                  }}
                >
                  Brokers
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button variant="h6" sx={{ cursor: "pointer" }}>
                  Trading Tools
                </Button>
              </Grid>

              <Grid item xs={2}>
                <Button
                  variant="h6"
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/blogs");
                  }}
                >
                  Academy(Blogs)
                </Button>
              </Grid>

              <Grid item xs={2}>
                {userValid() !== true ? (
                  <>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        cursor: "pointer",
                        backgroundColor: "black",
                        borderColor: "black",
                        borderRadius: "20px",
                        color: "white",
                        ":hover": {
                          bgcolor: "black",
                          color: "white",
                        },
                      }}
                      onClick={() => {
                        handleOnClick();
                      }}
                    >
                      Signin/Signup
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        cursor: "pointer",
                        backgroundColor: "#A97C50",
                        borderColor: "black",
                        borderRadius: "20px",
                        color: "white",
                        ":hover": {
                          bgcolor: "#A97C50",
                          color: "white",
                        },
                      }}
                      onClick={() => {
                        firebase
                          .auth()
                          .signOut()
                          .then(function () {
                            console.log("User signed out successfully");
                            navigate("/home");
                            notification.success({
                              message: "User signed out successfully",
                            });
                          })
                          .catch(function (error) {
                            console.error("Error signing out user:", error);
                          });
                      }}
                    >
                      Log out
                    </Button>
                    {/* <Grid item xs={2}> */}
                    {/* <Button
                        variant="contained"
                        size="large"
                        sx={{
                          cursor: "pointer",
                          backgroundColor: "#FFFFFF",
                          borderColor: "black",
                          borderRadius: "20px",
                          color: "#030229",
                          ":hover": {
                            bgcolor: "#FFFFFF",
                            color: "black",
                          },
                        }}
                      >
                        Add Account
                      </Button> */}
                    {/* </Grid> */}
                  </>
                )}
              </Grid>
            </>

            <Grid item xs={0.5}></Grid>

            <Grid item xs={1.5}>
              <DayNightToggle
                shadows={false}
                onChange={() => {
                  setMode(mode === "light" ? "dark" : "light");
                  setIsDarkMode(!isDarkMode);
                }}
                checked={isDarkMode}
              />

              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg"></Container>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainNavbar;
