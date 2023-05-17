import { FC } from 'react';
import { ApolloError } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import { Schema } from '@/server/schema';

type ResponseProps = {
  data: Schema | undefined;
  loading: boolean;
  error: ApolloError | undefined;
};

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
  },
  response: {
    height: '50vh',
    width: '36%',
    minWidth: '300px',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    borderRadius: '4px',
    margin: '1%',
    padding: '15px',
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.3)',
    overflow: 'auto',
    whiteSpace: 'pre-wrap',
  },
}));

export const EditorResponseSection: FC<ResponseProps> = (props: ResponseProps) => {
  const classes = useStyles();
  const { data, loading, error } = props;
  const response = `{"data": ${JSON.stringify(data)}"`
    .replace(/{/g, ' {\n')
    .replace(/":/g, '": ')
    .replace(/,/g, ',\n')
    .replace(/}/g, '\n}');

  return (
    <section className={classes.response}>
      {loading && <div>Loading</div>}
      {data ? response : error?.message}
    </section>
  );
};
