
import { useEffect, useState, useHistory } from "react";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container text>
      {showLogin ? (
        <>
        <h3>Login</h3>
        <Divider />
          <LoginForm onLogin={onLogin} />
          <br></br>
          <h5>
            Don't have an account? &nbsp;
            <Button variant="contained" color="primary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </h5>
        </>
      ) : (
        <>
       <h3>Register</h3>
       <Divider />
          <RegistrationForm onLogin={onLogin} />
          <h5>
            Already have an account? &nbsp;
            
            <Button variant="contained" color="secondary"  onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </h5>
        </>
      )}
    </Container>
  );
}



export default Login;