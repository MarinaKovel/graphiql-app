import { FC, useRef, useState } from 'react';
import { TextareaAutosize } from '@mui/base';
import { IconButton, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/ArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { gql, useLazyQuery } from '@apollo/client';
import { EditorResponseSection } from '../editor-response-section';
import './editor-section.scss';

const useStyles = makeStyles((theme) => ({
  editorSection: {
    position: 'relative',
    height: '50vh',
    width: '43%',
    minWidth: '300px',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
    borderRadius: '4px',
    margin: '1%',
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.3)',
  },
  editorSectionRequest: {
    display: 'flex',
    padding: '15px',
  },
  edit: {
    width: '100%',
    resize: 'none',
    borderRadius: '4px',
    color: theme.palette.type === 'light' ? theme.palette.grey[800] : theme.palette.grey[100],
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
  },
  editorSectionVariables: {
    bottom: '0',
    width: '100%',
    padding: '10px',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
  },
}));

export const EditorSection: FC = () => {
  const classes = useStyles();
  const queryRef = useRef<HTMLTextAreaElement>(null);
  const variablesRef = useRef<HTMLTextAreaElement>(null);
  const [queryBody, setQueryBody] = useState(`query{characters{info{count}}}`);

  const GET_RESPONSE = gql`
    ${queryBody}
  `;
  const [getAll, { loading, error, data }] = useLazyQuery(GET_RESPONSE);

  const handleClick = () => {
    if (queryRef.current && queryRef.current.value) {
      setQueryBody(queryRef.current.value);

      let variables;
      if (variablesRef?.current && variablesRef?.current.value) {
        variables = { variables: JSON.parse(variablesRef?.current.value) };
      }

      getAll(variables);
    }
  };

  return (
    <>
      <section className={classes.editorSection}>
        <div className={classes.editorSectionRequest}>
          <TextareaAutosize minRows={9} maxRows={9} className={classes.edit} ref={queryRef} />
          <IconButton
            sx={{ height: '40px', width: '40px', borderRadius: '4px' }}
            onClick={handleClick}
          >
            <PlayArrowIcon sx={{ height: '70px', width: '70px' }} />
          </IconButton>
        </div>
        <Accordion className={classes.editorSectionVariables} sx={{ position: 'absolute' }}>
          <AccordionSummary
            sx={{ height: '20px', minHeight: '20px' }}
            expandIcon={<ExpandMoreIcon />}
          >
            <p>Variables</p>
          </AccordionSummary>
          <AccordionDetails>
            <TextareaAutosize maxRows={5} className={classes.edit} ref={variablesRef} />
          </AccordionDetails>
        </Accordion>
      </section>
      <EditorResponseSection data={data} loading={loading} error={error} />
    </>
  );
};
