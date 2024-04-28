import React, { useState, useEffect } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box, CircularProgress } from '@mui/material';
import Header from '../GenericFolder/Header';
import HomeTopContent from './HomeTopContent';
import HomeSearch from './HomeSearch';
import UpcomingEvents from '../EventFolder/UpcomingEvents';
import Footer from '../GenericFolder/Footer';
import Steps from './Steps';
import { EventApi } from '../../apis/EventApi';
import { EventResponse } from '../../models/EventResponse';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const eventApi = new EventApi();
    eventApi.getUpcomingEvents()
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching event data:', error);
        setIsLoading(false); // Set loading to false even on error
      });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <HomeTopContent />
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="center" sx={{ m: -5 }}>
          <HomeSearch />
        </Box>
        <Box display="flex" justifyContent="center" sx={{ m: 2 }}>
          <Steps />
        </Box>
        <Box display="flex" justifyContent="center">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <UpcomingEvents title="Upcoming Events" events={events} />
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
