import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Header from '../GenericFolder/Header';
import HomeTopContent from './HomeTopContent';
import HomeSearch from './HomeSearch';
import UpcomingEvents from '../EventFolder/UpcomingEvents';
import Footer from '../GenericFolder/Footer';
import Steps from './Steps';

const Home: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <HomeTopContent />

      <Container maxWidth="xl" style={{ borderStyle: "dashed", borderColor: "red", height: "800px" }}>

        <Box
          display="flex" justifyContent="center" sx={{ m: -5 }}>

          <HomeSearch />

        </Box>






      </Container>
      <Footer />
      {/* <CssBaseline />
      <Header />
      <HomeTopContent />
      <HomeSearch />
      <Steps/>
      <UpcomingEvents />
      <Footer/> */}
    </>
  );
}

export default Home;
