import { FC } from 'react';
import { Box, Typography, Modal } from '@mui/material';

type ModalWindowProps = {
  isOpen: boolean;
  message: string;
  close: (val: boolean) => void;
};

export const ModalWindow: FC<ModalWindowProps> = ({ isOpen, message, close }) => {
  const handleClose = () => close(false);

  const style = {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '3px solid #5e5e5e',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: 24,
    p: 4,
    outlineColor: '#5e5e5e',
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {message}
        </Typography>
      </Box>
    </Modal>
  );
};
