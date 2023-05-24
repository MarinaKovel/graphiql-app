/* eslint-disable react/jsx-no-bind */
import { FC, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Drawer, Divider, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { Schema, SchemaFields } from '@/server/schema';
import { EditorDocsSectionType } from './editor-docs-section-type';
import { EditorDocsSectionFields } from './editor-docs-section-fields';
import { InitialType, setCurrentType, setInitialType } from '@/slices/docs-current-type-slice';
import { setCurrentArgs } from '@/slices/docs-current-args-slice';
import { setDocsHistory, clearLastHistory } from '@/slices/docs-history-slice';
import { setDocsParams } from '@/utils';
import './editor-docs-section.scss';

type DrawerProps = {
  open: boolean;
  toggleDrawerOpen: () => void;
};
type Btn = HTMLButtonElement & { name: string };

export const EditorDocsSection: FC<DrawerProps> = ({ open, toggleDrawerOpen }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const { title, name, description, type, fields } = useAppSelector((state) => state.currentType);
  const currentType = { title, name, description, type, fields };
  const { history } = useAppSelector((state) => state.docsHistory);
  const dispatch = useAppDispatch();

  const { mutations } = useAppSelector((state) => state.schema);
  const schemaDynamicKey = Object.keys(mutations)[0];
  const schema = (mutations[schemaDynamicKey] as Schema)?.data?.data?.__schema?.types;

  function showNext(event: MouseEvent) {
    const [newHistory, newCurrentType, field] = setDocsParams(schema, history, currentType, event);
    const btn = event.target as Btn;
    const newName = btn.innerText;

    if (!(btn?.name === 'showType' && newName === 'query')) {
      if (newName === 'Docs') {
        dispatch(setInitialType());
      } else if (newCurrentType) {
        dispatch(setCurrentType(newCurrentType as InitialType));
      }
    }
    if (field) dispatch(setCurrentArgs({ currentArgs: (field as SchemaFields).args }));
    dispatch(setDocsHistory(newHistory as string[]));
  }

  function showPrevious(event: MouseEvent) {
    showNext(event);
    dispatch(clearLastHistory());
  }

  return (
    <Drawer
      sx={{
        width: 0,
        '& .MuiDrawer-paper': { width: 240 },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <div className="drawer">
        <IconButton sx={{ borderRadius: '4px' }} onClick={toggleDrawerOpen}>
          <p>{t('editor-page.docs')}</p>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <div className="drawer__body">
        {history && (
          <>
            <span>&lt; </span>
            <button type="button" className="drawer__history" onClick={showPrevious}>
              {history[history.length - 1]}
            </button>
          </>
        )}

        <p className="title">{name}</p>
        {description && <p>{description}</p>}
        {fields && <EditorDocsSectionFields showNext={showNext} />}
        {type !== 'Query' && type !== '' && <EditorDocsSectionType />}
      </div>
    </Drawer>
  );
};
