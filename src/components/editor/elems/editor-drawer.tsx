import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Drawer, Divider, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type DrawerProps = {
  open: boolean;
  toggleDrawerOpen: () => void;
};

export const EditorDrawer: FC<DrawerProps> = ({ open, toggleDrawerOpen }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: 0,
        '& .MuiDrawer-paper': { width: 240 },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <div className="drawer">
        <IconButton sx={{ borderRadius: '4px' }} onClick={toggleDrawerOpen}>
          <p>{t('editor-page.docs')}</p>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <p>{t('editor-page.docs')}</p>
    </Drawer>
  );
};
