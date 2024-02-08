import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Login} from './Login'; // Import your Login component
import {Register} from './Register'; // Import your Register component

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Adjust the color to your preference
    },
  },
});

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Paper elevation={3} style={{ padding: '20px', minWidth: '300px', textAlign: 'center', backgroundColor: '#fff' }}>
          <Typography variant="h4" component="div" color="primary" gutterBottom>
            {isLogin ? 'Login' : 'Register'}
          </Typography>
          {isLogin ? <Login /> : <Register />}
          <Button onClick={toggleView} variant="contained" color="primary">
            {isLogin ? 'Switch to Register' : 'Switch to Login'}
          </Button>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginRegisterPage;
