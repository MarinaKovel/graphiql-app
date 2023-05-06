import { FC } from 'react';
import './editor-section.scss';

export const EditorSection: FC = () => {
  return (
    <section className="editor-section">
      <div className="editor-section__request">
        <textarea className="request__edit">query</textarea>
      </div>
      <div className="editor-section__variable">
        <p>Variables</p>
        <textarea className="request__variables" />
      </div>
    </section>
  );
};
