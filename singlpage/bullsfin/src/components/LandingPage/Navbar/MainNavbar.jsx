import React,{useState,useMemo} from 'react'
import {Button, Grid,Paper} from '@mui/material';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import DayNightToggle from 'react-day-and-night-toggle'
import logo from "../../../assets/logo.png"
import logoB from "../../../assets/logoB.png"
import { useNavigate } from 'react-router-dom';

function MainNavbar() {
    const [mode, setMode] = useState("light");
    const [isDarkMode, setIsDarkMode] = useState(false)
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/SignIn');
    const theme = useMemo(
        () =>
          createTheme({
            palette: {
              type: mode,
              background: {
                dark: "hsl(230, 17%, 14%)",
                light: "#F7F4EF"
              }
            }
          }),
        [mode]
      );
    
  return (
    <div >
    <Grid container  sx={{padding:6}}>
   <Grid item xs={2} >
           <img src={window.location.href.includes("Home")?logo:logoB}/>
          
   </Grid>
   <Grid item xs={1}  >
    </Grid>
   <Grid item xs={9}  >
           <Grid container >
      { window.location.href.includes("/Home")||window.location.href.includes("/Sign") ? <> 
       <Grid item xs={2}>
           <Button variant="h6" sx={{cursor:'pointer'}} >
           Home
       </Button>
       </Grid>
           <Grid item xs={2}>
           <Button variant="h6" sx={{cursor:'pointer'}} >
           Brokers
       </Button>
       </Grid>
       <Grid item xs={2}>
           <Button variant="h6" sx={{cursor:'pointer'}}>
           Trading Tools
       </Button>
       </Grid>

       <Grid item xs={2}>
       <Button variant="h6" sx={{cursor:'pointer'}}>
           Academy(Blogs)
       </Button>
       </Grid>
       <Grid item xs={2}>
              <Button variant="contained" size="large" sx={{cursor:'pointer',backgroundColor:"black",borderColor:'black',borderRadius:"20px",color:'white',
              ':hover': {
                bgcolor: 'black',
                color: 'white'}
              }}
              onClick={()=>{
                handleOnClick()
              }} 
              >
              Signin/Signup
          </Button>
          </Grid>
       </>:
       <> 
      <Grid item xs={6}>
          
          </Grid>
              <Grid item xs={2}>
              <Button variant="contained" size="large" sx={{cursor:'pointer',backgroundColor:"#FFFFFF",borderColor:'black',borderRadius:"20px",color:'#030229',
              ':hover': {
                bgcolor: '#FFFFFF',
                color: 'black'}
              }} 
              >
              Add Account
          </Button>
          </Grid>
          <Grid item xs={2}>
              <Button variant="contained" size="large"  sx={{cursor:'pointer',backgroundColor:"#A97C50",borderColor:'black',borderRadius:"20px",color:'white',':hover': {
              bgcolor: '#A97C50',
              color: 'white'}}}>
              Log out
          </Button>
          </Grid>
       
       </>
       }
        <Grid item xs={0.5}></Grid>
  

    

    <Grid item xs={1.5} >
      
      <DayNightToggle
      shadows={false}
    onChange={() =>{
      setMode(mode === "light" ? "dark" : "light")
      setIsDarkMode(!isDarkMode)}}
    checked={isDarkMode}
  />
      
     <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="lg">
             
    </Container>
  </ThemeProvider> 

  </Grid>
        </Grid>
   </Grid>
   

   
   </Grid>
   </div>

     )
}

export default MainNavbar