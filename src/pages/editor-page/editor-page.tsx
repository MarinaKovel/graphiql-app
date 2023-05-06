import { FC } from 'react';
import { DocsSection } from '@/components/docs-section';
import { EditorSection } from '@/components/editor-section';
import { ResponseSection } from '@/components/response-section';
import './editor-page.scss';

export const Editor: FC = () => {
  return (
    <div className="editor">
      <EditorSection />
      <ResponseSection />
      <DocsSection />
    </div>
  );
};
