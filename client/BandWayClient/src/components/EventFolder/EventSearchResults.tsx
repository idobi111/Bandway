import React, { useEffect, useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button, CircularProgress, Box } from '@mui/material';
import Header from '../GenericFolder/Header';
import UpcomingEvents from './UpcomingEvents';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';
import { useLocation } from 'react-router-dom';
import { EventApi } from '../../apis/EventApi';
import { EventResponse } from '../../models/EventResponse';

const EventSearchResults: React.FC = () => {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('performer');
  const toCity = queryParams.get('toCity');
  const fromCity =  queryParams.get('fromCity');
  const toCityId = queryParams.get('toCityId');
  const fromCityId =  queryParams.get('fromCityId');
  const performer: string | null = searchQuery;

  useEffect(() => {
    if (searchQuery) {
      const eventApi = new EventApi();
      eventApi.getEventsByPerformer(searchQuery)
        .then((data) => {
          if (toCity) {
            const filteredEvents = data.filter((event) => event.city === toCity);
            setEvents(filteredEvents);
          } else {
            setEvents(data); // Set all events if toCity is not provided
          }
          setIsLoading(false);
          console.log(events);
        })
        .catch((error) => {
          console.error('Error fetching event data:', error);
          setIsLoading(false);
        });
    }
  }, [searchQuery, toCity]); // Update effect only when searchQuery or toCity changes

  return (
    <>
      <CssBaseline />
      <Header />
      <TopContent mainText="We Discovered Outstanding Results for You..." subText='' />
      <Box display="flex" justifyContent="center">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <UpcomingEvents events={events} title={`${performer} Events${toCity ? ` in ${toCity}` : ''}`}  fromCity={fromCity} fromCityId={fromCityId} toCityId={toCityId}/>
      )}
      </Box>
      <Footer />
    </>
  );
}

export default EventSearchResults;
