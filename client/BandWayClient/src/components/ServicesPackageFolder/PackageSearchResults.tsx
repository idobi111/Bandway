import React, { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/types';
import { HotelApi } from '../../apis/HotelApi';
import { FlightApi } from '../../apis/FlightApi';
import { PackageBuilderService } from '../../services/PackageBuilderService';
import { Package } from '../../models/Package';
import UpcomingPackages from './UpcomingPackages';
import Header from '../GenericFolder/Header';
import TopContent from '../GenericFolder/TopContent';
import Footer from '../GenericFolder/Footer';
import { HotelResponse } from '../../models/HotelResponse';
import { FlightRoundWayResponse } from '../../models/FlightRoundWayResponse';
import { HotelRequest } from '../../models/HotelRequest';
import { FlightRequest } from '../../models/FlightRequest';
import { Box, Container, CssBaseline, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import Loader from '../MessageFolder/Loader';
import { ActionButton } from '../../styles/ComponentsStyles';
import { CarRentalRequest } from '../../models/CarRentalRequest';
import { CarApi } from '../../apis/CarApi';
import { CarRentalResponse } from '../../models/CarRentalResponse';
import PackageDialogFlightSection from './PackageCard/PackageDialog/PackageDialogFlightSection';
import PackageDialogCarSection from './PackageCard/PackageDialog/PackageDialogCarSection';
import { Helpers } from '../../helpers/helpers';
import { FlightService } from '../../services/FlightService';
import { SearchPackageData } from '../../models/SearchPackageData';
import { setPackageData } from '../../redux/actions';
import store from '../../redux/store';
import PackageSearch from './PackageSearch';

const PackageSearchResults: React.FC = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [hotels, setHotels] = useState<HotelResponse[]>([]); // Added state for hotels
    const [flights, setFlights] = useState<FlightRoundWayResponse>(); // Added state for flights
    const [cars, setCars] = useState<CarRentalResponse>(); // Added state for cars
    const [showFlights, setShowFlights] = useState(false);
    const [showCars, setShowCars] = useState(false);
    const [renderKey, setRenderKey] = useState(0);


    const [isLoading, setIsLoading] = useState(true);
    const packageData = useSelector((state: AppState) => state.packageData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hotelApi = new HotelApi();
    const flightApi = new FlightApi();
    const carApi = new CarApi();
    const packageBuilderService = new PackageBuilderService();
    const flightService = new FlightService();

    useEffect(() => {
        const storedPackageDataString = localStorage.getItem('packageData');
        console.log("Stored packageDataString:", storedPackageDataString);
        if (storedPackageDataString) {
            try {
                const storedPackageData: SearchPackageData = JSON.parse(storedPackageDataString);
                console.log("Parsed packageData:", storedPackageData);
                // Dispatch action to update eventData in Redux state
                dispatch(setPackageData(storedPackageData));
            } catch (error) {
                console.error("Error parsing JSON:", error);
                navigate(`/error`);
            }
        }
    }, [dispatch]);

    // Save eventData to localStorage whenever it changes
    useEffect(() => {
        if (packageData) {
            localStorage.setItem('packageData', JSON.stringify(packageData));
        }
    }, [packageData]);


    useEffect(() => {

        const fetchPackages = async () => {
            try {

                setIsLoading(true);


                const checkInDate = packageData.checkIn || null;
                const fromCityId = packageData.fromCityId || null;
                const toCityId = packageData.toCityId || null;


                const hotelRequest = packageBuilderService.createHotelRequestByPackageData(packageData.checkIn, packageData.checkOut, packageData.toCity, packageData.rooms, packageData.adults, packageData.children, packageData.maxPrice, packageData.minPrice);
                const hotelsData = await hotelApi.getHotels(hotelRequest);
                setHotels(hotelsData);

                const flightRequest = packageBuilderService.createFlightRequestByPackageData(packageData.checkIn, packageData.checkOut, packageData.fromCityId, packageData.toCityId, packageData.adults, packageData.children);
                const flightsData = await flightApi.getRoundWayFlights(flightRequest);
                flightService.sortFlightsFromLowestToHighestPrice(flightsData.roundWayFlightDetails); ///to fix
                setFlights(flightsData);


                const carRequest = await packageBuilderService.createCarRequestByPackageData(packageData.checkIn, packageData.checkOut, packageData.toCity);
                const carData = await carApi.getCarRentals(carRequest);
                //const carData = undefined;
                setCars(carData);

                const combinedPackages = packageBuilderService.combineResults(hotelsData, flightsData, carData);
                setPackages(combinedPackages);
                console.log("combinedPackages: " + combinedPackages);

                setIsLoading(false);

            } catch (error) {
                console.error('Error fetching hotel,  flight data or car rental data:', error);
                navigate(`/error`);
            }
        };

        fetchPackages();
    }, [packageData]);

    const handleClickOnSearchAgain = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate("/services-package-finder");
    }

    const handleShowFlights = () => {
        setShowFlights(true);
        setShowCars(false);
    };

    const handleShowCars = () => {
        setShowFlights(false);
        setShowCars(true);
    };

    useEffect(() => {
        setRenderKey(prevKey => prevKey + 1);
    }, [hotels]);

    return (
        <>
            <CssBaseline />
            <TopContent
                mainText={packages.length > 0 ? "We found the best results for you..." : "Looking for your packages..."}
                subText="We're here to craft a vacation that perfectly suits you." />
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
                            {hotels.length === 0 || packageBuilderService.isHotelDataNull(hotels) ? (
                                <Stack justifyContent='center' alignItems='center' sx={{ m: 8 }}>
                                    <Typography variant="h4" color="textSecondary" textAlign='center'>
                                        Looks like there are no available packages at the moment.
                                    </Typography>
                                    <Typography variant="h5" color="textSecondary" textAlign='center'>
                                        Consider altering searching criteria for better results.
                                    </Typography>
                                    <Stack direction='row' spacing={2} sx={{ mt: 3 }}>
                                        {flights && (<ActionButton variant="contained" color="primary"
                                            onClick={handleShowFlights}>
                                            Show Only Flights
                                        </ActionButton>)}
                                        {cars && (
                                            <ActionButton variant="contained" color="primary" onClick={handleShowCars}>
                                                Show Only Cars
                                            </ActionButton>)}
                                        <ActionButton variant="contained" color="primary"
                                            onClick={handleClickOnSearchAgain}>Back To Service Package
                                            Finder</ActionButton>
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
};

export default PackageSearchResults;
