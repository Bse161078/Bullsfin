import React, { useState, useMemo } from "react";
import logo from "./logo.svg";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/index";
import Signin from "./components/Signin/Signin";
import Signup from "./components/SignUp/Signup";
import { Container, CssBaseline } from "@material-ui/core";
import DayNightToggle from "react-day-and-night-toggle";
import FooterContent from "./components/Footer/FooterContent/FooterContent";
import Dashboard from "./components/Dashboard/Dashboard";
import MyAccount from "./components/MyAccount/MyAccount";
import Broker from "./components/Broker/Broker";
import BrokersInfo from "./components/BrokersInfo/BrokersInfo";
import BrokerProfile from "./components/Broker/ProkerProfile";
import Tools from "./components/Tools/Tools";
import WithDraw from "./components/WithDraw/WithDraw";

function App() {
  const [mode, setMode] = useState("light");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: mode,
          background: {
            dark: "hsl(230, 17%, 14%)",
            light: "hsl(0, 100%, 100%)",
          },
        },
      }),
    [mode]
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg"></Container>
        <Router
          style={{ width: "100vw", height: "100vh", overflowX: "hidden" }}
        >
          <Routes>
            <Route path="/Home" element={<LandingPage />}></Route>
            <Route path="/" element={<LandingPage />}></Route>

            <Route path="/SignIn" element={<Signin />}></Route>
            <Route path="/SignUp" element={<Signup />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/MyAccount" element={<MyAccount />}></Route>
            <Route path="/Broker" element={<Broker />}></Route>
            <Route
              path="/BrokerProfile"
              exact
              element={<BrokerProfile />}
            ></Route>
            <Route path="/withdraw" exact element={<WithDraw />}></Route>
            <Route path="/tools" exact element={<Tools />}></Route>

            <Route path="/BrokersInformation" element={<BrokersInfo />}></Route>
            {/* <Redirect path="/" to="/home" /> */}
          </Routes>
        </Router>

        <FooterContent />
      </ThemeProvider>
    </div>
  );
}

export default App;
