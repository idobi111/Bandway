import React, { useEffect, useState } from 'react';
import { CssBaseline, Typography, Container, Box, Stack, Button } from '@mui/material';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';
import PackageSearch from './PackageSearch';
import UpcomingPackages from './UpcomingPackages';
import { Package } from '../../models/Package';
import { HotelApi } from '../../apis/HotelApi';
import { PackageBuilderService } from '../../services/PackageBuilderService';
import { HotelResponse } from '../../models/HotelResponse';
import { FlightApi } from '../../apis/FlightApi';
import { SearchEventData } from '../../models/SearchEventData';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/types';
import { setEventData } from '../../redux/actions';
import store from '../../redux/store';
import { FlightRoundWayResponse } from '../../models/FlightRoundWayResponse';
import { FlightService } from '../../services/FlightService';
import { CarApi } from '../../apis/CarApi';
import { CarRentalResponse } from '../../models/CarRentalResponse';
import { useNavigate } from 'react-router';
import Loader from '../MessageFolder/Loader';
import { ActionButton } from '../../styles/ComponentsStyles';
import PackageDialogFlightSection from './PackageCard/PackageDialog/PackageDialogFlightSection';
import PackageDialogCarSection from './PackageCard/PackageDialog/PackageDialogCarSection';

const ServicesPackageFinder: React.FC = () => {

  const [packages, setPackages] = useState<Package[]>([]);
  const [hotels, setHotels] = useState<HotelResponse[]>([]);
  const [flights, setFlights] = useState<FlightRoundWayResponse>();
  const [cars, setCars] = useState<CarRentalResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [showFlights, setShowFlights] = useState(false);
  const [showCars, setShowCars] = useState(false);

  const eventData = useSelector((state: AppState) => state.eventData);
  const flightService = new FlightService();

  const mainText: string = "Services Package Finder";
  const subText: string = "Explore our comprehensive service package finder for a complete and enhanced experience!";

  const hotelApi = new HotelApi();
  const flightApi = new FlightApi();
  const carApi = new CarApi();

  const packageBuilderService = new PackageBuilderService();

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        navigate(`/error`);
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
    const fetchPackages = async () => {
      try {
        const checkInDate = eventData.checkIn || null;
        const fromCityId = eventData.fromCityId || null;
        const toCityId = eventData.toCityId || null;

        const hotelRequest = packageBuilderService.createHotelRequestByEventData(eventData.checkIn, eventData.venue, eventData.fromCity, eventData.toCity);
        const hotelsData = await hotelApi.getHotels(hotelRequest);
        //const hotelsData = [];
        setHotels(hotelsData);

        const flightRequest = packageBuilderService.createFlightRequestByEventData(checkInDate, fromCityId, toCityId);
        const flightsData = await flightApi.getRoundWayFlights(flightRequest);
        //flightService.sortFlightsFromLowestToHighestPrice(flightsData.roundWayFlightDetails); ///to fix
        //const flightsData = undefined;
        setFlights(flightsData);

        const carRequest = await packageBuilderService.createCarRequestByEventData(checkInDate, eventData.toCity);
        const carData = await carApi.getCarRentals(carRequest);
        //const carData = undefined;
        setCars(carData);

        const combinedPackages = packageBuilderService.combineResults(hotelsData, flightsData, carData);
        setPackages(combinedPackages);

        setIsLoading(false);

      } catch (error) {
        console.error('Error fetching hotel or flight data:', error);
        navigate(`/error`);
      }
    };
    fetchPackages();

  }, []);

  const handleShowFlights = () => {
    setShowFlights(true);
    setShowCars(false);
  };

  const handleShowCars = () => {
    setShowFlights(false);
    setShowCars(true);
  };

  return (
    <>
      <CssBaseline />
      <TopContent mainText={mainText} subText={subText} />
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="center" sx={{ m: -5 }}>
          <Provider store={store}>
            <PackageSearch />
          </Provider>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          {isLoading ? (
            <Loader loadingMessage='Loading packages...' />
          ) : (
            <>
              {hotels.length === 0 ? (
                <Stack justifyContent='center' alignItems='center' sx={{ m: 8 }}>
                  <Typography variant="h4" color="textSecondary" textAlign='center'>
                    Looks like there are no available packages at the moment.
                  </Typography>
                  <Typography variant="h5" color="textSecondary" textAlign='center'>
                    Consider altering searching criteria for better results.
                  </Typography>
                  <Stack direction='row' spacing={2} sx={{ mt: 3 }}>
                    {flights && (<ActionButton variant="contained" color="primary" onClick={handleShowFlights}>
                      Show Only Flights
                    </ActionButton>)}
                    {cars && (<ActionButton variant="contained" color="primary" onClick={handleShowCars}>
                      Show Only Cars
                    </ActionButton>)}
                  </Stack>
                </Stack>
              ) : packages.length > 0 ? (
                <UpcomingPackages servicePackages={packages} />
              ) : (
                <Stack justifyContent='center' alignItems='center' sx={{ m: 8 }}>
                  <Typography variant="h3" color="textSecondary" textAlign='center'>
                    Looks like there are no available packages at the moment.
                  </Typography>
                  <Typography variant="h4" color="textSecondary" textAlign='center'>
                    Consider altering searching criteria for better results.
                  </Typography>
                </Stack>
              )}
              <Box mt={2} display="flex" flexDirection="column" alignItems="flex-start">
                {showFlights && flights && (
                  <Box>
                    <PackageDialogFlightSection servicesPackage={packages[0]} accordionWidth={100} />
                  </Box>
                )}
                {showCars && cars && (
                  <Box>
                    <PackageDialogCarSection servicesPackage={packages[0]} accordionWidth={100} />
                  </Box>
                )}
              </Box>
            </>
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default ServicesPackageFinder;
