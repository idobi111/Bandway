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
import store from './redux/store';
import { Provider } from 'react-redux';
import ErrorPage from './components/MessageFolder/ErrorPage';
import ThankYouPage from './components/MessageFolder/ThankYouPage';
import UnsubscribePage from './components/MessageFolder/UnsubscribePage';
import ContactUs from './components/MessageFolder/ContactUs';
import HowItWorks from './components/MessageFolder/HowItWorks';
import AboutUs from './components/MessageFolder/AboutUs';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Provider store={store}>
            <Home />
          </Provider>
        } />        <Route path="/home" element={
          <Provider store={store}>
            <Home />
          </Provider>
        } />
        <Route path="/event-search-results" element={
          <Provider store={store}>
            <EventSearchResults />
          </Provider>
        } />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={
          <Provider store={store}>
            <SignIn />
          </Provider>
        } />
        <Route path="/post-ticket-order" element={<PostTicketOrder />} />
        <Route path='/services-package-finder' element={
          <Provider store={store}>
            <ServicesPackageFinder />
          </Provider>
        }></Route>
        <Route path='/package-search-results' element={
          <Provider store={store}>
            <PackageSearchResults />
          </Provider>
        }></Route>
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/unsubscribe" element={<UnsubscribePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter >
  );
};

export default App;
