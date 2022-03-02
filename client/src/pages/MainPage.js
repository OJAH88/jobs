import { useEffect, useState } from "react";
import useFetch from "../components/useFetch"
import { useHistory, useParams } from "react-router"
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
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


function MainPage() {
    const {id} = useParams()
    const { data: application, error, isLoading } = useFetch('applications/' + id) 
    const [user, setUser] = useState("")
    const [applications, setApplications] = useState([])
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setUser(user));
          }
        });
      }, []);

    useEffect(() => {
        fetch("/applications")
          .then((r) => r.json())
          .then(setApplications);
      }, []);


      console.log(user)
      console.log(user.applications)


      

    return (
        <Container>
            <Typography variant="body2" color="text.secondary" align="center">
                Test
            </Typography>
        </Container>

    )
;


}



export default MainPage