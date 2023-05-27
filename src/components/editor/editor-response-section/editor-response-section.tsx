import { FC } from 'react';
import { SyncLoader } from 'react-spinners';
import { ApolloError } from '@apollo/client';
import { Box, Typography, useTheme } from '@mui/material';
import { Schema } from '@/server/schema';
import { override } from '@/utils';
import './editor-response-section.scss';

type ResponseProps = {
  data: Schema | undefined;
  loading: boolean;
  error: ApolloError | undefined;
};
type NetworkError = Error & {
  result?: { errors: object };
};

export const EditorResponseSection: FC<ResponseProps> = ({ data, loading, error }) => {
  const { palette } = useTheme();
  const response = `{"data": ${JSON.stringify(data, null, '\t')}"`;
  let errorMsg = '';
  if (error) {
    errorMsg = `{"errors": ${JSON.stringify(
      (error?.networkError as NetworkError).result?.errors,
      null,
      '\t'
    )}"`;
  }

  return (
    <Box sx={{ backgroundColor: palette.background.default }} className="response">
      <Typography
        variant="subtitle2"
        color={palette.text.secondary}
        sx={{ pr: '4px', textAlign: 'end' }}
      >
        rickandmortyapi
      </Typography>
      {loading && <SyncLoader cssOverride={override} color="#768fa3" size={25} />}
      {data ? response : errorMsg}
    </Box>
  );
};
