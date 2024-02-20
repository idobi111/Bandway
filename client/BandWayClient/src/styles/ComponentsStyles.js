import { styled } from '@mui/system';
import { Box, Button, Typography, AppBar, Container, Grid, TextField } from '@mui/material';


// Header
export const HeaderAppBar = styled(AppBar)({
  width: '100%',
  backgroundColor: '#4B0082',
  height: '20%'
});

export const HeaderButton = styled(Button)({
  color: 'white',
  textTransform: 'none',
})


// Home Top Content
export const HomeTopBox = styled(Box)({
  backgroundColor: '#4B0082',
  position: 'relative',
  height: '500px',
  display: 'flex',
  alignItems: 'center',
  width: '100%'
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

export const ActionButton = styled(Button)({
  borderRadius: '20px', 
  padding: '10px 20px',
  backgroundColor: '#FF1493',
  marginTop: '20px',
  textTransform: 'none',
});

export const LearnMoreButton = styled(Button)({
  borderRadius: '20px', 
  padding: '10px 20px', 
  marginTop: '20px',
  color:'white',
  marginLeft: '20px',
  borderColor: 'white',
  textTransform: 'none',
});


// Home Search

export const HomeSearchGrid = styled(Grid)({
  marginLeft: '50px',
})

export const SearchTextField = styled(TextField )({
  width:'300px',
  borderColor: 'white'
})

export const SearchWindowDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#191970',
  width: '1000px', 
  height: '100px', 
  borderRadius: '20px', 
  color: 'white',
  marginLeft: '250px',
  
})