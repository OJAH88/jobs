import React, { useState } from "react";
import { useHistory } from 'react-router'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user))
      // localStorage.setItem("token", user.token)
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
        history.push('/')
      });
    }

    return (
      <form onSubmit={handleSubmit}>
          <h2>Login</h2>
            <h5>Email</h5>
            <TextField
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
     
          
            <h5>Name</h5>
            <TextField
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
                  <br />
  
  
               
                    <Button variant="contained" type="submit">
            {isLoading ? "Loading..." : "Login"}
          </Button>
  
      </form>
    );
  }

export default LoginForm;
