import { styled } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';

export const HomeTopBox = styled(Box)({
  backgroundColor: '#4B0082',
  position: 'relative',
  height: '500px',
  display: 'flex',
  alignItems: 'center',
});

export const ShadowImage = styled('img')({
  height: '150px',
  width: '600px',
  position: 'absolute',
  top: '375px',
  left: '200px'
});

export const BandImage = styled('img')({
  height: '450px',
  width: '450px',
  marginLeft: '300px'
});

export const TypographyTitle = styled(Typography)({
  width: '400px',
  wordWrap: 'break-word',
  color: 'white'
});

export const SubTitle = styled(Typography)({
  width: '400px',
  wordWrap: 'break-word',
  color: 'white'
});

export const GetTicketButton = styled(Button)({
  borderRadius: '20px', 
  padding: '10px 20px',
  backgroundColor: '#FF1493',
  marginTop: '20px'
});

export const LearnMoreButton = styled(Button)({
  borderRadius: '20px', 
  padding: '10px 20px', 
  marginTop: '20px',
  color:'white',
  marginLeft: '20px',
  borderColor: 'white'
});

