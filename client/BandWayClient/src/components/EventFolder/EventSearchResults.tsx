import React, { useEffect, useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Header from '../GenericFolder/Header';
import UpcomingEvents from './UpcomingEvents';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';
import { useLocation } from 'react-router-dom';
import { EventApi } from '../../apis/EventApi';
import { Event } from '../../models/EventResponse';



const EventSearchResults: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');
  const performer:string | null = searchQuery;

  useEffect(() => {
    if (searchQuery) {
      const eventApi = new EventApi();
      eventApi.getEventsByPerformer(searchQuery)
        .then((data) => {
          setEvents(data)
          console.log(data);
        })
        .catch((error) => {
          console.error('Error fetching event data:', error);
        });    
    }
  }, [searchQuery]);

  return (
    <>
      <CssBaseline />
      <Header />
      <TopContent mainText="We Discovered Outstanding Results for You..." subText=''/>
      <UpcomingEvents performer={performer} events={events}/>
      <Footer/>
    </>
  );
}

export default EventSearchResults;
