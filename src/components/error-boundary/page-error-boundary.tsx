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

type PageErrorBoundaryProps = {
  errMsg: string;
};

export const PageErrorBoundary: FC<PageErrorBoundaryProps> = ({ errMsg }) => {
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
            <p>{errMsg}</p>
            <p>{t('error-boundary.text')}</p>
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
