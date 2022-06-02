import React from 'react';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const paddingBottom = { paddingBottom: '10px' };
  const navigate = useNavigate();
  return (
    <Dialog open>
      <DialogTitle>
        Регистрация аккаутна
      </DialogTitle>
      <DialogContent>
        <Box sx={paddingBottom}>
          <TextField id="standard-basic" label="Почта" variant="standard" />
        </Box>
        <Box sx={paddingBottom}>
          <TextField id="standard-basic" label="Пароль" variant="standard" />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => navigate('/registration')}
        >
          Регистрация
        </Button>
        <Button>
          Войти
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Login;
