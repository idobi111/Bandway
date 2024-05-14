import React, { useEffect, useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button, CircularProgress, Box, Stack } from '@mui/material';
import Header from '../GenericFolder/Header';
import UpcomingEvents from './UpcomingEvents';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';
import { useLocation, useNavigate } from 'react-router-dom';
import { EventApi } from '../../apis/EventApi';
import { EventResponse } from '../../models/EventResponse';
import { SearchEventData } from '../../models/SearchEventData';
import { Provider, useSelector } from 'react-redux';
import { AppState } from '../../redux/types';
import store from '../../redux/store';
import Loader from '../MessageFolder/Loader';
import { ActionButton } from '../../styles/ComponentsStyles';

const EventSearchResults: React.FC = () => {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const eventData = useSelector((state: AppState) => state.eventData);
  const navigate = useNavigate();

  useEffect(() => {
    if (eventData.performer) {
      const eventApi = new EventApi();
      eventApi.getEventsByPerformer(eventData.performer)
        .then((data) => {
          if (eventData.toCity) {
            const filteredEvents = data.filter((event) => event.city === eventData.toCity);
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
          navigate(`/error`);
        });
    }
  }, [eventData.performer, eventData.toCity]); // Update effect only when searchQuery or toCity changes


  const handleClickOnSearchAgain = () => {
    navigate("/home");
  }

  

  return (
    <>
      <CssBaseline />
      <TopContent mainText={events.length > 0 ? "We Discovered Outstanding Results for You..." : `We are Looking for Results for You...`} subText='' />
      <Box display="flex" justifyContent="center">
        {isLoading ? (
          <Loader loadingMessage={`Loading ${eventData.performer} events...`}></Loader>
        ) : events.length > 0 ? (
          <UpcomingEvents events={events} title={`${eventData.performer} Events${eventData.toCity ? ` in ${eventData.toCity}` : ''}`} />
        ) : (
          <Stack justifyContent={'center'} alignItems={'center'} sx={{p: 8}}>
            <Typography variant="h4" color="textSecondary" textAlign="center">Looks like there are no events matching your search</Typography>
            <Typography variant="h5" color="textSecondary">Consider altering either the performer or destination for better results.</Typography>
            <ActionButton variant='contained' onClick={handleClickOnSearchAgain} style={{ width: '350px', height: '80px' }}>Let's search again</ActionButton>
          </Stack>
        )}
      </Box>
      <Footer />
    </>
  );
}

export default EventSearchResults;
