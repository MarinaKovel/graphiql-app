import { FC, useEffect } from 'react';
import { DocsSection } from '@/components/docs-section';
import { EditorSection } from '@/components/editor-section';
import { ResponseSection } from '@/components/response-section';
import { API, TSchema } from '@/server/schema';
import './editor-page.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { themeSlice } from '@/slices/themeSlice';

export const Editor: FC = () => {
  const { theme } = useAppSelector((state) => state.themeReducer);
  const { increment } = themeSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    API.getSchema().then((data: void | Partial<TSchema>) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="editor">
      <h1>{theme}</h1>
      <button type="button" onClick={() => dispatch(increment('dark'))}>
        Change theme
      </button>
      <EditorSection />
      <ResponseSection />
      <DocsSection />
    </div>
  );
};
