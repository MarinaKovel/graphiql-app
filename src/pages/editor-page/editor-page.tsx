import { FC, useEffect, useState, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { getSchema } from '@/server/schema';
import { Editor } from '@/components/editor';
import './editor-page.scss';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" />;
});

export const EditorPage: FC = () => {
  const [schema, { isError }] = getSchema.useFetchSchemaMutation();
  const [open, setOpen] = useState(true);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  useEffect(() => {
    schema('data');
  }, []);

  return (
    <>
      <Editor />
      {isError && (
        <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '300px' }}>
            Error to fetch schema!
          </Alert>
        </Snackbar>
      )}
    </>
  );
};
