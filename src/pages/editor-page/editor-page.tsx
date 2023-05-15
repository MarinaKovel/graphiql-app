import { FC, useEffect } from 'react';
import { getSchema } from '@/server/schema';
import { Editor } from '@/components/editor';
import './editor-page.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { themeSlice } from '@/slices/themeSlice';

export const EditorPage: FC = () => {
  const [schema, { isError }] = getSchema.useFetchSchemaMutation();

  useEffect(() => {
    schema('data');
  }, []);

  return <Editor />;
};
