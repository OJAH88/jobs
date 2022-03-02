import * as React from 'react';
import { useEffect, useState, useHistory } from "react";
import { Switch, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/ojah88">
        JAH Code
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function App() {
  const [user, setUser] = useState("")
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;



  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
      <main>
     

        <Route exact path="/">
          <MainPage user={user} setUser={setUser}  />
        </Route>
        
   
      </main>
        <Copyright />
      </Box>
    </Container>
  );
}