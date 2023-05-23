import { FC, useRef, useState } from 'react';
import { TextareaAutosize } from '@mui/base';
import { useTranslation } from 'react-i18next';
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
  const queryRef = useRef<HTMLTextAreaElement>(null);
  const variablesRef = useRef<HTMLTextAreaElement>(null);
  const [queryBody, setQueryBody] = useState(`query{characters{info{count}}}`);

  const { palette } = useTheme();

  const GET_RESPONSE = gql`
    ${queryBody}
  `;
  const [getAll, { loading, error, data }] = useLazyQuery(GET_RESPONSE);

  const handleClick = () => {
    if (queryRef.current) {
      setQueryBody(queryRef.current.value);

      let variables;
      if (variablesRef?.current && variablesRef?.current.value) {
        variables = { variables: JSON.parse(variablesRef?.current.value) };
      }

      getAll(variables);
    }
  };

  const { t } = useTranslation();

  return (
    <>
      <Box
        className="editor-section"
        sx={{ backgroundColor: palette.background.default, position: 'relative' }}
      >
        <div className="editor-section__content">
          <textarea
            className={
              palette.mode.includes('light')
                ? 'editor-section__input'
                : 'editor-section__input_dark'
            }
            rows={9}
            cols={9}
            ref={queryRef}
            placeholder="query"
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
          <AccordionDetails>
            <TextareaAutosize
              className={palette.mode.includes('light') ? 'input-light' : 'input-dark'}
              maxRows={4}
              minRows={4}
              ref={variablesRef}
            />
          </AccordionDetails>
        </Accordion>
      </Box>
      <EditorResponseSection data={data} loading={loading} error={error} />
    </>
  );
};
