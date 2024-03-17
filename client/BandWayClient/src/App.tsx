import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/HomeFolder/Home";
import EventSearchResults from './components/EventFolder/EventSearchReults';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event-search-results" element={<EventSearchResults />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
