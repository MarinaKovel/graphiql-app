import { FC } from 'react';
import './editor-section.scss';

export const EditorSection: FC = () => {
  return (
    <section className="editor-section">
      <div className="editor-section__request">
        <textarea className="edit" defaultValue="query" />
      </div>
      <div className="editor-section__variables">
        <p>Variables</p>
        <textarea className="variables" />
      </div>
    </section>
  );
};
