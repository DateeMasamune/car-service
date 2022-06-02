import React from 'react';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Registration() {
  const paddingBottom = { paddingBottom: '10px' };
  const navigate = useNavigate();
  const { register } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });
  return (
    <Dialog open>
      <DialogTitle>
        Регистрация аккаутна
      </DialogTitle>
      <DialogContent>
        <Box sx={paddingBottom}>
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('email', {
              minLength: {
                value: 3,
                message: 'не верная почта',
              },
            })}
            id="standard-basic"
            label="Почта"
            variant="standard"
          />
        </Box>
        <Box sx={paddingBottom}>
          <TextField id="standard-basic" label="Имя" variant="standard" />
        </Box>
        <Box sx={paddingBottom}>
          <TextField id="standard-basic" label="Фамилия" variant="standard" />
        </Box>
        <Box sx={paddingBottom}>
          <TextField id="standard-basic" label="Пароль" variant="standard" />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => navigate('/login')}
        >
          Войти
        </Button>
        <Button>
          Готово
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Registration;
