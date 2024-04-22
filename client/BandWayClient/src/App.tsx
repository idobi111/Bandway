import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/HomeFolder/Home";
import EventSearchResults from './components/EventFolder/EventSearchResults';
import PostTicketOrder from './components/TicketOrderFolder/PostTicketOrder';
import ServicesPackageFinder from './components/ServicesPackageFolder/ServicesPackageFinder';
import PackageSearchResults from './components/ServicesPackageFolder/PackageSearchResults';
import SignUp from './components/SignUserFolder/SignUp';
import SignIn from './components/SignUserFolder/SignIn';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event-search-results" element={<EventSearchResults />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/post-ticket-order" element={<PostTicketOrder />} />
        <Route path='/services-package-finder' element={<ServicesPackageFinder/>}></Route>
        <Route path='/package-search-results' element={<PackageSearchResults/>}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
