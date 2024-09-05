import React, { useState, useEffect } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box, CircularProgress, Stack } from '@mui/material';
import Header from '../GenericFolder/Header';
import HomeTopContent from './HomeTopContent';
import HomeSearch from './HomeSearch';
import UpcomingEvents from '../EventFolder/UpcomingEvents';
import Footer from '../GenericFolder/Footer';
import Steps from './Steps';
import { EventApi } from '../../apis/EventApi';
import { EventResponse } from '../../models/EventResponse';
import {Provider, useDispatch} from 'react-redux';
import store from '../../redux/store';
import { HeaderBox } from '../../styles/ComponentsStyles';
import { useNavigate } from 'react-router';
import Loader from '../MessageFolder/Loader';
import {setEventData} from "../../redux/actions";
import {defaultEventData} from "../../redux/reducer";

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    localStorage.removeItem('eventData');
    localStorage.removeItem('packageData');
    dispatch(setEventData(defaultEventData));
  }, []);
  
  useEffect(() => {
    const eventApi = new EventApi();
    eventApi.getUpcomingEvents()
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching event data:', error);
        navigate(`/error`);
      });
  }, []);

  const scrollToUpcomingEvents = () => {
    console.log("Scrolling to Upcoming Events");
    const upcomingEventsElement = document.getElementById('upcoming-events');
    upcomingEventsElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <CssBaseline />
      <HeaderBox>
        <Header />
        <HomeTopContent scrollToUpcomingEvents={scrollToUpcomingEvents} />
      </HeaderBox>
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="center" sx={{ m: -8 }}>
          <Stack justifyContent="center" alignItems="center">
            <Typography variant='h6' sx={{ color: 'white' }}>The package of your dreams awaits…</Typography>
            <Provider store={store}>
              <HomeSearch />
            </Provider>
          </Stack>

        </Box>
        <Box display="flex" justifyContent="center" sx={{ m: 8 }}>
          <Steps />
        </Box>
        <Box id="upcoming-events" display="flex" justifyContent="center">
          {isLoading ? (
            <Loader loadingMessage="Loading upcoming events..."></Loader>
          ) : events.length > 0 ? (
            <UpcomingEvents title="Upcoming Events" events={events} />
          ) : (
            <Stack justifyContent={'cenetr'} alignItems={'center'} sx={{ marginBottom: 8 }}>
              <Typography variant="h2" color="textSecondary">
                Looks like there are no upcoming events at the moment.
              </Typography>
              <Typography variant="h4" color="textSecondary">
                Why not try searching for your favorite performer?
              </Typography>
            </Stack>
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
