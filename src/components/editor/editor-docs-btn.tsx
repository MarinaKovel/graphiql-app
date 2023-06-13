/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState, SyntheticEvent } from 'react';
import { IconButton, Snackbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { getSchema } from '@/server/schema';
import { Alert } from '@/components/alert';

type EditorDocsBtnProps = {
  onClick: () => void;
};

const EditorDocsBtn: FC<EditorDocsBtnProps> = ({ onClick }) => {
  const { t } = useTranslation();

  const [schema, { isError }] = getSchema.useFetchSchemaMutation();
  const [open, setOpen] = useState(true);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  useEffect(() => {
    schema('data');
  }, []);

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={onClick}
        disabled={isError}
        sx={{ height: '50px', marginTop: '1%', borderRadius: '4px' }}
      >
        <ChevronLeftIcon />
        <h2>{t('editor-page.docs-short')}</h2>
      </IconButton>

      {isError && (
        <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '300px' }}>
            {t('editor-page.error-schema')}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default EditorDocsBtn;
