import { styled } from '@mui/system';
import { Card, CardMedia, CardHeader, Link, CardContent } from '@mui/material';

export const CardWrapper = styled(Card)(() => ({
  flex: '1 1 300px',
  marginTop: 20,
  maxWidth: 300,
}));

export const Media = styled(CardMedia)(() => ({
  height: 300,
}));

export const CardHeaderWrapper = styled(CardHeader)(({ theme }) => ({
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  color: theme.palette.mode === 'light' ? 'dark' : 'white',
}));

export const ButtonBlock = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
}));

export const GithubLink = styled(Link)(() => ({
  color: 'white',
}));
