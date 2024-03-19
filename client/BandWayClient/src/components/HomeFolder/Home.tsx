import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
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
      <HomeSearch />
      <Steps/>
      <UpcomingEvents />
      <Footer/>
    </>
  );
}

export default Home;
