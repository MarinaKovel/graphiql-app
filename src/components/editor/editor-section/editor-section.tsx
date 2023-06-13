import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import {
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  useTheme,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/ArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import { TabPanel, TabsList, Tabs, Tab, tabClasses, buttonClasses } from '@mui/base';
import { gql, useLazyQuery } from '@apollo/client';
import { ModalWindow } from '@/components/modal-window';
import { EditorResponseSection } from '../editor-response-section';
import './editor-section.scss';

const StyledTab = styled(Tab)`
  font-family: DM Sans, sans-serif;
  color: white;
  cursor: pointer;
  padding: 5px 12px;
  height: 30px;
  border-radius: 4px;
  display: flex;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    color: #fff;
  }

  &.${tabClasses.selected} {
    background-color: #546a7b;
    color: #fff;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledTabPanel = styled(TabPanel)`
  font-family: DM Sans, sans-serif;
  font-size: 16px;
  overflow: scroll;
  max-height: 80px;
`;

const StyledTabsList = styled(TabsList)(
  () => `
  height: 30px;
  background-color: rgba(0, 0, 0, 0.54);
  border-radius: 4px;
  display: flex;
  font-family: DM Sans, sans-serif;
  font-size: 16px;
  position: absolute;
  top: 15px;
  `
);

export const customHeaders = {};

export const EditorSection: FC = () => {
  const { t } = useTranslation();
  const code = 'query{ }\n\n\n';
  const extensions = [javascript()];

  const [query, setQuery] = useState(code);
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');
  const [queryBody, setQueryBody] = useState(`query{characters{info{count}}}`);
  const [errVariables, setErrVariables] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [message, setMessage] = useState('error');
  const { palette } = useTheme();

  const GET_RESPONSE = gql`
    ${queryBody}
  `;
  const [getAll, { loading, error, data }] = useLazyQuery(GET_RESPONSE);

  const handleClick = () => {
    try {
      setQuery(query);
      if (query && !query.includes('{}') && !query.includes('{ }')) {
        setQueryBody(query);
        let parseVariables;
        if (variables) parseVariables = JSON.parse(variables);
        if (headers) Object.assign(customHeaders, {}, JSON.parse(headers));

        getAll({ variables: parseVariables });
      } else {
        setMessage(t('editor-page.query-error').toString());
        setIsModal(true);
      }
    } catch (e: unknown) {
      if (e instanceof Error) setErrVariables(e.message);
    }
  };

  const handleChangeQuery = (e: string) => setQuery(e);
  const handleChangeVariables = (e: string) => setVariables(e);
  const handleChangeHeaders = (e: string) => setHeaders(e);

  return (
    <>
      <Box
        className="editor-section"
        sx={{ backgroundColor: palette.background.default, position: 'relative' }}
      >
        <ModalWindow isOpen={isModal} message={message} close={setIsModal} />
        <div className="editor-section__content">
          <CodeMirror
            value={query}
            extensions={extensions}
            onChange={(e) => handleChangeQuery(e)}
          />
          <IconButton
            sx={{ height: '40px', width: '40px', borderRadius: '4px' }}
            onClick={handleClick}
          >
            <PlayArrowIcon sx={{ height: '70px', width: '70px' }} />
          </IconButton>
        </div>
        <Accordion sx={{ position: 'absolute', bottom: '0', width: '100%', margin: 0 }}>
          <AccordionSummary sx={{ minHeight: '25px' }} expandIcon={<ExpandMoreIcon />} />
          <AccordionDetails sx={{ minHeight: '20px', height: '100%' }}>
            <Tabs defaultValue={1}>
              <StyledTabsList>
                <StyledTab value={1}>{t('editor-page.variables')}</StyledTab>
                <StyledTab value={2}>{t('editor-page.headers')}</StyledTab>
              </StyledTabsList>

              <StyledTabPanel value={1}>
                <CodeMirror
                  value={variables}
                  extensions={extensions}
                  onChange={(e) => handleChangeVariables(e)}
                />
              </StyledTabPanel>
              <StyledTabPanel value={2}>
                <CodeMirror
                  value={headers}
                  extensions={extensions}
                  onChange={(e) => handleChangeHeaders(e)}
                />
              </StyledTabPanel>
            </Tabs>
          </AccordionDetails>
        </Accordion>
      </Box>
      <EditorResponseSection
        data={data}
        loading={loading}
        error={error}
        errVariables={errVariables}
      />
    </>
  );
};
