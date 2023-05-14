import { FC } from 'react';
import { TextareaAutosize } from '@mui/base';
import './editor-section.scss';

export const EditorSection: FC = () => {
  return (
    <section className="editor-section">
      <div className="editor-section__request">
        <TextareaAutosize minRows={9} maxRows={9} className="edit" defaultValue="query" />
      </div>
      <div className="editor-section__variables">
        <p>Variables</p>
        <TextareaAutosize maxRows={1} className="variables" />
      </div>
    </section>
  );
};
