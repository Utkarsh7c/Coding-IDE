import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client';
import Typography from '@mui/material/Typography';

export const Register = () => {
  const [Message, setMessage] = useState('');
  const emailRef = useRef();
  const pwdRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();

  const doRegister = async () => {
    const userInfo = {
      'email': emailRef.current.value,
      'password': pwdRef.current.value,
      'name': nameRef.current.value,
      'phone': phoneRef.current.value,
    };

    try {
      const response = await apiClient.post(process.env.REACT_APP_REGISTER, userInfo);
      setMessage(response.data.message);
      console.log('response is ', response);
      console.log('userInfo is ', userInfo);
    } catch (err) {
      setMessage('Registration failed');
      console.log('err', err);
    }
  };

  return (
    <Container maxWidth="sm">
      {/* <Typography variant="h4" align="center">Register</Typography> */}
      <TextField inputRef={emailRef} fullWidth label="Email" variant="outlined" margin="normal" />
      <TextField inputRef={pwdRef} fullWidth label="Password" variant="outlined" margin="normal" type="password" />
      <TextField inputRef={nameRef} fullWidth label="Name" variant="outlined" margin="normal" />
      <TextField inputRef={phoneRef} fullWidth label="Phone" variant="outlined" margin="normal" />
      <Button onClick={doRegister} variant="contained" color="primary" fullWidth>
        Register
      </Button>
      <Typography variant="body1" align="center">{Message}</Typography>
    </Container>
  );
}
