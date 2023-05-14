import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getSchema } from '@/server/schema';
import { Editor } from '@/components/editor';
import { auth } from '@/server/firebase';
import { RoutePath } from '@/utils/enum';
import { setUser } from '@/slices/user-slice';
import { useAppDispatch } from '@/hooks/redux';
import './editor-page.scss';

export const EditorPage: FC = () => {
  const [schema, { isError }] = getSchema.useFetchSchemaMutation();
  useEffect(() => {
    schema('data');
  }, []);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate(RoutePath.HOME, { replace: true });
    } else {
      dispatch(setUser({ id: user.uid, email: user.email }));
    }
  }, [user, dispatch, loading, navigate]);

  return <Editor />;
};
