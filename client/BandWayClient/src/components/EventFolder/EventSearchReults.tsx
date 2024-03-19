import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Header from '../GenericFolder/Header';
import UpcomingEvents from '../EventFolder/UpcomingEvents';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';

const EventSearchResults: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <TopContent mainText="We Discovered Outstanding Results for You..." subText=''/>
      <UpcomingEvents />
      <Footer/>
    </>
  );
}

export default EventSearchResults;
