import React from 'react';
import './App.css';
import { CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Header from './components/Header';
import HomeTopContent from './components/HomeTopContent';
import HomeSearch from './components/HomeSearch';
import HomeUpcomingEvents from './components/HomeUpcomingEvents';
import Footer from './components/Footer';
import Steps from './components/Steps';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <HomeTopContent />
      <HomeSearch />
      <Steps/>
      <HomeUpcomingEvents />
      <Footer/>
    </>
  );
}

export default App;
