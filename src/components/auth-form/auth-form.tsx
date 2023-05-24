import { FC, useState, MouseEvent } from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { TypeOf, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomBtn } from '../custom-btn';
import './auth-form.scss';

type FormProps = {
  title: string;
  handleClick: (email: string, password: string) => void;
};

export const AuthForm: FC<FormProps> = ({ title, handleClick }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const authSchema = z.object({
    email: z.string().nonempty(t('email.required').toString()).email(t('email.invalid').toString()),
    password: z
      .string()
      .nonempty(t('pswd.required').toString())
      .min(8, t('pswd.length').toString())
      .refine((value) => /[A-Za-z]/gm.test(value), t('pswd.letter').toString())
      .refine((value) => /[0-9]/gm.test(value), t('pswd.digit').toString())
      .refine((value) => /[!-/:-@[-`{-~]/gm.test(value), t('pswd.char').toString()),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TypeOf<typeof authSchema>>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(authSchema),
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = ({ email, password }: TypeOf<typeof authSchema>) => {
    handleClick(email, password);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="auth-form"
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={t('auth-page.email')}
        type="email"
        className="auth-form__input"
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ''}
        {...register('email')}
      />
      <TextField
        type={showPassword ? 'text' : 'password'}
        className="auth-form__input"
        defaultValue=""
        label={t('auth-page.password')}
        error={!!errors.password}
        InputProps={{
          endAdornment: (
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
          ),
        }}
        helperText={errors.password ? errors.password.message : ''}
        {...register('password')}
      />

      <CustomBtn btnType="submit">{title}</CustomBtn>
    </Box>
  );
};
