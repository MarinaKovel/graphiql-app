import { FC, useState, MouseEvent } from 'react';
import { Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip } from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import { useTranslation } from 'react-i18next';
import { logout } from '@/server/firebase';
import { removeUser } from '@/slices/user-slice';
import { useAppDispatch } from '@/hooks/redux';

type MenuProps = {
  email: string | null;
};

export const UserMenu: FC<MenuProps> = ({ email }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const avatarChar = email?.slice(0, 1);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(removeUser());
    logout();
  };

  return (
    <>
      <Tooltip title="Account">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ p: 0 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32, backgroundColor: '#546a7b' }}>{avatarChar}</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'background.paper',
          },
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,

            '& .MuiButtonBase-root': {
              padding: '16px',
              display: 'flex',
              justifyContent: 'flex-start',
            },
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          disabled
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'auto',
            color: '#546a7b',
          }}
        >
          <Avatar />
          {email}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} sx={{ color: 'GrayText' }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {t('logout')}
        </MenuItem>
      </Menu>
    </>
  );
};
