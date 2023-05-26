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
import { gql, useLazyQuery } from '@apollo/client';
import { EditorResponseSection } from '../editor-response-section';
import './editor-section.scss';

export const EditorSection: FC = () => {
  const { t } = useTranslation();
  const code = 'query{ }\n\n\n';
  const extensions = [javascript()];

  const [query, setQuery] = useState(code);
  const [variables, setVariables] = useState('');
  const [queryBody, setQueryBody] = useState(`query{characters{info{count}}}`);
  const { palette } = useTheme();

  const GET_RESPONSE = gql`
    ${queryBody}
  `;
  const [getAll, { loading, error, data }] = useLazyQuery(GET_RESPONSE);

  const handleClick = () => {
    setQueryBody(query);

    if (variables) {
      const parseVariables = JSON.parse(variables);
      getAll(parseVariables);
    }
  };

  const handleChangeQuery = (e: string) => {
    setQuery(e);
  };

  const handleChangeVariables = (e: string) => {
    setVariables(e);
  };

  return (
    <>
      <Box
        className="editor-section"
        sx={{ backgroundColor: palette.background.default, position: 'relative' }}
      >
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
        <Accordion sx={{ position: 'absolute', bottom: '0', width: '100%' }}>
          <AccordionSummary sx={{ minHeight: '20px' }} expandIcon={<ExpandMoreIcon />}>
            <p>{t('editor-page.variables')}</p>
          </AccordionSummary>
          <AccordionDetails sx={{ height: '100px' }}>
            <CodeMirror
              value={variables}
              extensions={extensions}
              onChange={(e) => handleChangeVariables(e)}
            />
          </AccordionDetails>
        </Accordion>
      </Box>
      <EditorResponseSection data={data} loading={loading} error={error} />
    </>
  );
};
