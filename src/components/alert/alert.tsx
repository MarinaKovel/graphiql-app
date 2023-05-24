import { forwardRef } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  const { children, severity } = props;
  return (
    <MuiAlert elevation={6} ref={ref} variant="filled" severity={severity}>
      {children}
    </MuiAlert>
  );
});
