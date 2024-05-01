import React, { useContext, useEffect, useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Header from '../GenericFolder/Header';
import UpcomingEvents from '../EventFolder/UpcomingEvents';
import Footer from '../GenericFolder/Footer';
import { EventApi } from '../../apis/EventApi';
import TopContent from '../GenericFolder/TopContent';
import PackageSearch from './PackageSearch';
import UpcomingPackages from './UpcomingPackages';
import { Package } from '../../models/Package';
import { packagesMock } from '../../mocks/PackageMock';
import { HotelApi } from '../../apis/HotelApi';
import { PackageBuilderService } from '../../services/PackageBuilderService';
import { HotelResponse } from '../../models/HotelResponse';
import { FlightApi } from '../../apis/FlightApi';
import { FlightResponse } from '../../models/FlightOneWayResponse';
import { SearchEventData } from '../../models/SearchEventData';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/types';
import { setEventData } from '../../redux/actions';
import store from '../../redux/store';


const ServicesPackageFinder: React.FC = () => {

  const [packages, setPackages] = useState<Package[]>([]);
  const [hotels, setHotels] = useState<HotelResponse[]>([]);
  const [flights, setFlights] = useState<FlightResponse[]>([]);

  const eventData = useSelector((state: AppState) => state.eventData);


  const mainText: string = "Services Package Finder";
  const subText: string = "Explore our comprehensive service package finder for a complete and enhanced experience !";

  const hotelApi = new HotelApi();
  const flightApi = new FlightApi();

  const packageBuilderService = new PackageBuilderService();
  
  const dispatch = useDispatch();

  // Load eventData from localStorage on component mount
  useEffect(() => {
    const storedEventDataString = localStorage.getItem('eventData');
    console.log("Stored eventDataString:", storedEventDataString);
    if (storedEventDataString) {
      try {
        const storedEventData: SearchEventData = JSON.parse(storedEventDataString);
        console.log("Parsed eventData:", storedEventData);
        // Dispatch action to update eventData in Redux state
        dispatch(setEventData(storedEventData));
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, [dispatch]);

  // Save eventData to localStorage whenever it changes
  useEffect(() => {
    if (eventData) {
      localStorage.setItem('eventData', JSON.stringify(eventData));
    }
  }, [eventData]);

  
  useEffect(() => {
    const hotelRequest = packageBuilderService.createHotelRequestByEventData(eventData.checkIn, eventData.venue, eventData.fromCity, eventData.toCity);
    hotelApi.getHotels(hotelRequest)
      .then((data) => {
        setHotels(data);
        const combinedPackages = packageBuilderService.combineResults(data);
        setPackages(combinedPackages);
      })
      .catch((error) => {
        console.error('Error fetching hotels data:', error);
      });
  }, []);

  // useEffect(() => {
  //   // This useEffect will run whenever 'packages' state changes
  //   // You can perform any action here that depends on 'packages'
  //   console.log("Packages updated:", packages);
  // }, [packages]);



  // useEffect(() => {

  //   const hotelRequest = packageBuilderService.createHotelRequestByEventData(checkIn, venue, fromCity, toCity);
  //   console.log(hotelRequest);
  //   hotelApi.getHotels(hotelRequest)
  //     .then((data) => {
  //       setHotels(data);
  //       console.log("first useEffect data", data);
  //       console.log("first useEffect", hotels);

  //     })
  //     .catch((error) => {
  //       console.error('Error fetching hotels data:', error);
  //     });

  //     // const flightRequest = packageBuilderService.createFlightRequestByEventData(checkIn, fromCityId, toCityId);
  //     // console.log(flightRequest);

  //     // flightApi.getOneWayFlights(flightRequest)
  //     // .then((data) => {
  //     //   setFlights(data)
  //     //   console.log(data);
  //     // })
  //     // .catch((error) => {
  //     //   console.error('Error fetching flights data:', error);
  //     // });


  // }, []);



  return (
    <>
      <CssBaseline />
      <Header />
      <TopContent mainText={mainText} subText={subText} />
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="center" sx={{ m: -5 }}>
        <Provider store={store}>
          <PackageSearch />
          </Provider>
        </Box>
        <Box display="flex" justifyContent="center" sx={{ m: 2 }}>
          {/* <Steps /> */}
        </Box>
        <Box display="flex" justifyContent="center">
          {packages.length > 0 ? (
              < UpcomingPackages servicePackages={packages} />
          ) : (<p>Loading packages...</p>)}
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default ServicesPackageFinder;
