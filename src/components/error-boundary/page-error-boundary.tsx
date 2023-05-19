import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { CustomBtn } from '../custom-btn';

export const PageErrorBoundary: FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);

  const reloadPage = () => window.location.reload();
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{t('error-boundary.title')}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('error-boundary.text')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomBtn btnType="button" handleSubmit={reloadPage}>
            {t('error-boundary.button')}
          </CustomBtn>
        </DialogActions>
      </Dialog>
    </div>
  );
};
