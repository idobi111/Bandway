import React, { useEffect, useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Header from '../GenericFolder/Header';
import HomeTopContent from './HomeTopContent';
import HomeSearch from './HomeSearch';
import UpcomingEvents from '../EventFolder/UpcomingEvents';
import Footer from '../GenericFolder/Footer';
import Steps from './Steps';
import { EventApi } from '../../apis/EventApi';
import { Event } from '../../models/Event';

const Home: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
 
  useEffect(() => {
    const eventApi = new EventApi();
    eventApi.getUpcomingEvents()
        .then((data) => {
            const eventDataWithPlaceholderImage = data.map(event => {
                return { ...event, images: ['https://via.placeholder.com/150'] };
            });
            setEvents(eventDataWithPlaceholderImage);
            console.log(eventDataWithPlaceholderImage);
        })
        .catch((error) => {
            console.error('Error fetching event data:', error);
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
        <UpcomingEvents performer="" events={events} />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
