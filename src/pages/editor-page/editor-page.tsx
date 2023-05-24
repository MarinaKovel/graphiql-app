import { FC, useState, Suspense, lazy } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { EditorSection } from '@/components/editor/editor-section';
import { EditorDocsSection } from '@/components/editor/editor-docs-section';
import { ErrorBoundary } from '@/components/error-boundary';

const EditorDocsBtn = lazy(() => import('@/components/editor/editor-docs-btn'));

export const EditorPage: FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const toggleDrawerOpen = () => setOpen(!open);

  return (
    <Box sx={{ pb: '10px' }}>
      <Suspense fallback={<p>{t('editor-page.docs-loading')}</p>}>
        <EditorDocsBtn toggleDrawerOpen={toggleDrawerOpen} />
      </Suspense>
      <Box sx={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
        <ErrorBoundary>
          <EditorSection />
        </ErrorBoundary>
        <EditorDocsSection open={open} toggleDrawerOpen={toggleDrawerOpen} />
      </Box>
    </Box>
  );
};
