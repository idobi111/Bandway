import React, { useEffect, useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button, CircularProgress, Box } from '@mui/material';
import Header from '../GenericFolder/Header';
import UpcomingEvents from './UpcomingEvents';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';
import { useLocation } from 'react-router-dom';
import { EventApi } from '../../apis/EventApi';
import { EventResponse } from '../../models/EventResponse';
import { SearchEventData } from '../../models/SearchEventData';
import { EventService } from '../../services/EventService';

export const EventSearchResultsSearchEventDataContext = React.createContext<SearchEventData>({
  performer: '',
  toCity: '',
  toCountry: '',
  fromCity: '',
  fromCountry: '',
  toCityId: '',
  fromCityId: ''
});


const EventSearchResults: React.FC = () => {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const eventService = new EventService();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const searchEventData: SearchEventData = eventService.getSearchQueryParams(queryParams);

  useEffect(() => {
    if (searchEventData.performer) {
      const eventApi = new EventApi();
      eventApi.getEventsByPerformer(searchEventData.performer)
        .then((data) => {
          if (searchEventData.toCity) {
            const filteredEvents = data.filter((event) => event.city === searchEventData.toCity);
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
  }, [searchEventData.performer, searchEventData.toCity]); // Update effect only when searchQuery or toCity changes

  return (
    <>
      <CssBaseline />
      <Header />
      <TopContent mainText="We Discovered Outstanding Results for You..." subText='' />
      <Box display="flex" justifyContent="center">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <EventSearchResultsSearchEventDataContext.Provider value={searchEventData}>
        <UpcomingEvents events={events} title={`${searchEventData.performer} Events${searchEventData.toCity ? ` in ${searchEventData.toCity}` : ''}`}/>
        </EventSearchResultsSearchEventDataContext.Provider>
      )}
      </Box>
      <Footer />
    </>
  );
}

export default EventSearchResults;
