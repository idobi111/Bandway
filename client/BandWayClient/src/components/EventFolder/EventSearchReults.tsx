import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Header from '../GenericFolder/Header';
import HomeUpcomingEvents from '../EventFolder/HomeUpcomingEvents';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';

const EventSearchResults: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <TopContent text="We Discovered Outstanding Results for You..."/>
      <HomeUpcomingEvents />
      <Footer/>
    </>
  );
}

export default EventSearchResults;
