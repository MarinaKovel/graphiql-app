import { FC, useEffect } from 'react';
import { getSchema } from '@/server/schema';
import { Editor } from '@/components/editor';
import './editor-page.scss';

export const EditorPage: FC = () => {
  const [schema, { isError }] = getSchema.useFetchSchemaMutation();

  useEffect(() => {
    schema('data');
  }, []);

  return <Editor />;
};
