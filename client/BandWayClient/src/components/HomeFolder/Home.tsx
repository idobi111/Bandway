import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Header from '../GenericFolder/Header';
import HomeTopContent from './HomeTopContent';
import HomeSearch from './HomeSearch';
import UpcomingEvents from '../EventFolder/UpcomingEvents';
import Footer from '../GenericFolder/Footer';
import Steps from './Steps';

const events = [];
const Home: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <HomeTopContent />
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="center" sx={{ m: -5 }}>
          <HomeSearch />
        </Box>
        <Box display="flex" justifyContent="center" sx={{ m: 2 }}>
          <Steps />
        </Box>
        <Box display="flex" justifyContent="center">
        <UpcomingEvents events={events} />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
