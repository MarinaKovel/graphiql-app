import { FC } from 'react';
import { SyncLoader } from 'react-spinners';
import { ApolloError } from '@apollo/client';
import { Box, Typography, useTheme } from '@mui/material';
import { Schema } from '@/server/schema';
import { override } from '@/utils/const';
import './editor-response-section.scss';

type ResponseProps = {
  data: Schema | undefined;
  loading: boolean;
  error: ApolloError | undefined;
};

export const EditorResponseSection: FC<ResponseProps> = (props: ResponseProps) => {
  const { palette } = useTheme();
  const { data, loading, error } = props;
  const response = `{"data": ${JSON.stringify(data)}"`
    .replace(/{/g, ' {\n')
    .replace(/":/g, '": ')
    .replace(/,/g, ',\n')
    .replace(/}/g, '\n}');

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
