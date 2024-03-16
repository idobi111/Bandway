import React from 'react';
import './App.css';
import { CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Header from './components/Header';
import HomeTopContent from './components/HomeTopContent';
import HomeSearch from './components/HomeSearch';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <HomeTopContent />
      <HomeSearch />
    </>
  );
}

export default App;
