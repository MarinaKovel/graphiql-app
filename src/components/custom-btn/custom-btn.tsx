import { FC, ReactNode, MouseEvent } from 'react';
import Button from '@mui/material/Button';

type BtnProps = {
  children: ReactNode | string;
  handleSubmit?: (e: MouseEvent) => void | undefined;
  btnType: 'button' | 'submit' | 'reset' | undefined;
};

export const CustomBtn: FC<BtnProps> = ({ children, handleSubmit, btnType }) => (
  <Button
    variant="contained"
    sx={{ backgroundColor: '#5e5e5e', '&:hover': { backgroundColor: '#768fa3' } }}
    type={btnType}
    onClick={handleSubmit}
  >
    {children}
  </Button>
);

CustomBtn.defaultProps = {
  handleSubmit: undefined,
};
