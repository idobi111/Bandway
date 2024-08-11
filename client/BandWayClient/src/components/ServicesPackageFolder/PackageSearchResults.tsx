import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
import{ Helpers } from '../../helpers/helpers';

const PackageSearchResults: React.FC = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [hotels, setHotels] = useState<HotelResponse[]>([]); // Added state for hotels
    const [flights, setFlights] = useState<FlightRoundWayResponse>(); // Added state for flights
    const [cars, setCars] = useState<CarRentalResponse>(); // Added state for cars
    const [showFlights, setShowFlights] = useState(false);
    const [showCars, setShowCars] = useState(false);

    const [isLoading, setIsLoading] = useState(true);
    const packageData = useSelector((state: AppState) => state.packageData);
    const navigate = useNavigate();


    useEffect(() => {
        const hotelApi = new HotelApi();
        const flightApi = new FlightApi();
        const carApi = new CarApi();
        const packageBuilderService = new PackageBuilderService();

        const fetchPackages = async () => {
            try {
            const helpers = new Helpers();
                // Create hotel request object
                const hotelRequest: HotelRequest = {
                    checkIn: helpers.formatDateString(packageData.checkIn) || '',
                    checkOut: helpers.formatDateString(packageData.checkOut) || '',
                    venueName: packageData.toCity || '',
                    rooms: packageData.rooms || 0,
                    adults: packageData.adults || 0,
                    children: packageData.children || 0,
                    maxPrice: packageData.maxPrice || 0,
                    minPrice: packageData.minPrice || 0,
                };

                // Create flight request object
                const flightRequest: FlightRequest = {
                    departureDate: packageData.checkIn || '',
                    returnDate: packageData.checkOut || '',
                    src: packageData.fromCity || '',
                    dest: packageData.toCity || '',
                    adults: packageData.adults || 0,
                    children: packageData.children || 0,
                    infants: 0,
                    isDirectFlight: false, // Set this based on your requirements
                    cabinClass: 'economy', // Set this based on your requirements
                };

                // Create car request object
                const carRequest: CarRentalRequest = {
                    pickupStartDate: packageData.checkIn || '',
                    dropoffEndDate: packageData.checkOut || '',
                    pickupCity: packageData.toCity || '',
                    dropoffCity: packageData.toCity || '',
                    pickupTime: '',
                    dropoffTime: '',
                    driverAge: 18,
                    carType: [],
                    hasHairConditioner: true
                };

                // Fetch hotel data
                console.log(hotelRequest);
               const hotelsData = await hotelApi.getHotels(hotelRequest);
//                 const hotelsData = [];
                setHotels(hotelsData);

                // Fetch flight data
                console.log(flightRequest);
               const flightsData = await flightApi.getRoundWayFlights(flightRequest);
//                 const flightsData = undefined;
                setFlights(flightsData);

                // Fetch car data
                console.log(carRequest);
                const carData = await carApi.getCarRentals(carRequest);
//                 const carData = undefined;
                setCars(carData);
                // Combine hotel and flight data to generate packages
                console.log("hotelsData: " + hotelsData);
                console.log("flightsData: " + flightsData);
                console.log("carData: " + carData);
                const combinedPackages = packageBuilderService.combineResults(hotelsData, flightsData, carData);

                console.log("combinedPackages: " + combinedPackages);
                // Set the packages state with the combined packages
                setPackages(combinedPackages);
                setIsLoading(false);

            } catch (error) {
                console.error('Error fetching hotel or flight data:', error);
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

    return (
        <>
            <CssBaseline />
            <TopContent mainText={packages.length > 0 ? "We found the best results for you..." : "Looking for your packages..."} subText="We're here to craft a vacation that perfectly suits you." />
            <Container maxWidth="xl">

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
                                        <ActionButton variant="contained" color="primary" onClick={handleClickOnSearchAgain}>Back To Service Package Finder</ActionButton>
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
