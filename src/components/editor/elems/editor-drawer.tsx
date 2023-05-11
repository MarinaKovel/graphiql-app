import { FC } from 'React';
import { IconButton, Drawer, Divider, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type TDrawerProps = {
  open: boolean;
  toggleDrawerOpen: () => void;
};

export const EditorDrawer: FC<TDrawerProps> = ({ open, toggleDrawerOpen }) => {
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
          <p>Docs</p>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <p>Docs content</p>
    </Drawer>
  );
};
