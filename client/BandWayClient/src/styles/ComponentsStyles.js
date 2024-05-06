import { styled } from '@mui/system';
import { Box, Button, Typography, AppBar, Container, Grid, TextField, Card, CardMedia, Autocomplete } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// HeaderBox
export const HeaderBox = styled(Box)({
  background: `
  linear-gradient(to right, rgba(237, 70, 144, 0.7) 0%, rgba(85, 34, 204, 0.7) 100%),
  url('src/pics/Crowd.png')`,
backgroundSize: 'cover',
});


// Header
export const HeaderAppBar = styled(AppBar)({
  width: '100%',
  background: `
  linear-gradient(to right, rgba(237, 70, 144, 0.7) 0%, rgba(85, 34, 204, 0.7) 100%),
  url('src/pics/Crowd.png')`,
backgroundSize: 'cover',
  height: '20%',
  boxShadow: 'none'
});

export const HeaderButton = styled(Button)({
  color: 'white',
  textTransform: 'none',
})


// Home Top Content

export const HomeTopContainer = styled(Container)({
  height: '500px'
});

// export const HomeTopBox = styled(Box)({
//   backgroundColor: '#4B0082',
//   position: 'relative',
//   height: '500px',
//   display: 'flex',
//   alignItems: 'center',
//   width: '100%',
//   marginBottom:'50px'
// });

export const ShadowImage = styled('img')({
  // height: '150px',
  // width: '600px',
  // position: 'absolute',
  // top: '375px',
  // left: '200px'
});

export const BandImage = styled('img')({
   height: '450px',
   width: '450px',
  //  marginLeft: '300px'
});

export const TypographyTitle = styled(Typography)({
  width: '50%',
  wordWrap: 'break-word',
  color: 'white'
});

export const SubTitle = styled(Typography)({
  width: '50%',
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

export const SubActionButton = styled(Button)({
  borderRadius: '20px', 
  padding: '10px 20px',
  backgroundColor: '#A9A9A9',
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
  //  marginLeft: '50px',
})

export const SearchAutoComplete = styled(Autocomplete )({
  width:'200px',
  borderColor: 'white',
  '& input': {
    color: 'white', // Change the font color to blue
  },
})


export const SearchTextField = styled(TextField )({
  width:'300px',
  borderColor: 'white',
  '& input': {
    color: 'white', // Change the font color to blue
  },
})

export const WindowDiv = styled('div')({
  margin: '10px 10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#191970',
  width: '1200px', 
  height: '150px', 
  borderRadius: '20px', 
  color: 'white',
  
})

//Event Card
export const EventCardStyled = styled(Card)({
  maxWidth: '345',
  margin: '20px',
  '&:hover': {
      cursor: 'pointer',
    }
})

export const EventCardMediaStyled = styled(CardMedia)({
  height: '140' 
})

export const LoadMoreButton = styled(Button)({
  borderRadius: '20px', 
  padding: '10px 20px', 
  marginTop: '20px',
  color:'blue',
  marginLeft: '20px',
  borderColor: 'blue',
  textTransform: 'none',
});


// Footer
export const BandWayFooter = styled('footer')({
  backgroundColor: '#191970',
  color: '#fff',
  padding: '2rem'
})

export const FooterTitle = styled(Typography)({
  paddingBottom: '10px',
  fontWeight: 'bold'
})

export const FooterItem = styled(Typography)({
  fontSize: '13px'
})

export const FooterCopyRights = styled(Typography)({
  textAlign: 'center',
  fontSize: '10px',
  paddingTop: '50px'
})

// Steps

export const StepCircleText = styled('div')({
   borderRadius: '20px', 
   padding: '10px 10px',
   backgroundColor: '#872FA6',
   marginTop: '20px',
   textTransform: 'none',
   color: 'white',
   width: '300px',
   textAlign:'center',
})

export const StepArrow = styled(ArrowForwardIosIcon)({
  
})


// Generic

export const GenericTopBox = styled(Box)({
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center', 
  color: 'white',
});

export const GenricTopBoxText = styled(Typography)({
  color: 'white',
  display: 'block',
  marginBottom: '10px'
});

export const SeparateRowsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const GenricWhiteText = styled(Typography)({
  color: 'white', 
  textAlign: 'center', 
  justifyContent: 'center', 
  wordBreak: 'break-word'
});