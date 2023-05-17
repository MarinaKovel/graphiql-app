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
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomBtn } from '../custom-btn';
import './auth-form.scss';

const useStyles = makeStyles((theme) => ({
  label: {
    color: theme.palette.text.secondary,
  },
}));

type FormProps = {
  title: string;
  handleClick: (email: string, password: string) => void;
};

export const AuthForm: FC<FormProps> = ({ title, handleClick }) => {
  const { t } = useTranslation();
  const classes = useStyles();
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
        label={t('auth-page.email')}
        type="email"
        className="auth-form__input"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputLabelProps={{
          classes: {
            root: classes.label,
          },
        }}
      />

      <FormControl variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          classes={{
            root: classes.label,
          }}
        >
          {t('auth-page.password')}
        </InputLabel>
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
