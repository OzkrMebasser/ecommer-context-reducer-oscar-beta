import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import LOGO from '../utils/images/tuttytour.png'


function Copyright() {
  return (
    <Typography variant="h6" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
      TuttyTour
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 function Login () {
  const classes = useStyles();

  return (
    
    <Container component="main" maxWidth="xs">
    
      <CssBaseline />
      <div className={classes.paper}>
      <Link to="/">
        <Typography color="primary" variant="h6">
          <img src={LOGO} alt="logo" /> 
        </Typography>
      </Link>
        <Avatar className={classes.avatar}>
          
        </Avatar>
        <Typography component="h6" variant="h5">
          Iniciar sesión
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electronico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Checkbox value="remember" color="secondary" />  
          Recordar Contraseña         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Iniciar sesión
          </Button>
          <Grid container>
            <Grid item xs>
            <Link to="/" variant="h6">
              ¿Olvidaste tu contraseña? 
            </Link>
            </Grid>
            <Grid item>
            
              
              <Link to="/" variant="h6">
             "¿No tienes cuenta aún?   Registrate gratis"
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={4}>
        <Copyright />
      </Box>

    </Container>
  );
}
export default Login;