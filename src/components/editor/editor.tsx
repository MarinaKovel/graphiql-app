import { FC, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { EditorSection } from './elems/editor-section';
import { EditorResponseSection } from './elems/editor-response-section';
import { EditorDrawer } from './elems/editor-drawer';

export const Editor: FC = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const toggleDrawerOpen = () => setOpen(!open);

  return (
    <div className="editor">
      <Box sx={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
        <EditorSection />
        <EditorResponseSection />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawerOpen}
          sx={{ height: '50px', marginTop: '1%', borderRadius: '4px' }}
        >
          <ChevronLeftIcon />
          <h2>{t('editor-page.docs-short')}</h2>
        </IconButton>
        <EditorDrawer open={open} toggleDrawerOpen={toggleDrawerOpen} />
      </Box>
    </div>
  );
};
