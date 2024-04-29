import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Header from '../GenericFolder/Header';
import UpcomingEvents from '../EventFolder/UpcomingEvents';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';
import PackageInterestQuestion from './PackageInterestQuestion';
import { SearchEventData } from '../../models/SearchEventData';
import { EventService } from '../../services/EventService';
import { useLocation } from 'react-router';

export const PostTicketOrderSearchEventDataContext = React.createContext<SearchEventData>({
  performer: '',
  toCity: '',
  toCountry: '',
  fromCity: '',
  fromCountry: '',
  toCityId: '',
  fromCityId: ''
});

const PostTicketOrder: React.FC = () => {

  const eventService = new EventService();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchEventData: SearchEventData = eventService.getSearchQueryParams(queryParams);


  const titleText = "Allow us to simplify your life!"
  const descriptionText = "We'll discover the optimal package for you... encompassing flights, hotels, car rentals, and additional services"

  return (
    <>
      <CssBaseline />
      <Header />
      <TopContent mainText="You got a ticket !" subText='First step on the way to vacation...' />
      <PostTicketOrderSearchEventDataContext.Provider value={searchEventData}>
        <PackageInterestQuestion titleText={titleText} descriptionText={descriptionText} acceptButtonText="Find my vacation deal" rejectButtonText="No, Thanks"></PackageInterestQuestion>
      </PostTicketOrderSearchEventDataContext.Provider>
      <Footer />
    </>
  );
}

export default PostTicketOrder;
