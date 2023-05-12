import { FC, useState, MouseEvent } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  OutlinedInput,
  IconButton,
  InputLabel,
  FormControl,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomBtn } from '../custom-btn';
import './auth-form.scss';

type FormProps = {
  title: string;
  handleClick: (email: string, password: string) => void;
};

export const AuthForm: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    handleClick(email, password);
  };

  return (
    <Box component="form" className="auth-form" autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Email"
        type="email"
        className="auth-form__input"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          className="auth-form__input"
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <CustomBtn handleSubmit={handleSubmit} btnType="submit">
        {title}
      </CustomBtn>
    </Box>
  );
};
