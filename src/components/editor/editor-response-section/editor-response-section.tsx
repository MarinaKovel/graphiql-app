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

export const EditorResponseSection: FC<ResponseProps> = ({ data, loading, error }) => {
  const { palette } = useTheme();
  const response = `{"data": ${JSON.stringify(data, null, '\t')}"`;

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
      {data ? response : error?.message}
    </Box>
  );
};
