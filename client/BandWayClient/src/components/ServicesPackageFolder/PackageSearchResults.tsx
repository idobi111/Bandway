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
import { Box, CssBaseline, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import Loader from '../MessageFolder/Loader';
import { ActionButton } from '../../styles/ComponentsStyles';

const PackageSearchResults: React.FC = () => {
    const [packages, setPackages] = useState<Package[]>([]);
    const [hotels, setHotels] = useState<HotelResponse[]>([]); // Added state for hotels
    const [flights, setFlights] = useState<FlightRoundWayResponse>(); // Added state for flights
    const [isLoading, setIsLoading] = useState(true);
    const packageData = useSelector((state: AppState) => state.packageData);
    const navigate = useNavigate();


    useEffect(() => {
        const hotelApi = new HotelApi();
        const flightApi = new FlightApi();
        const packageBuilderService = new PackageBuilderService();

        const fetchPackages = async () => {
            try {
                // Create hotel request object
                const hotelRequest: HotelRequest = {
                    checkIn: packageData.checkIn || '',
                    checkOut: packageData.checkOut || '',
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

                // Fetch hotel data
                console.log(hotelRequest);
                const hotelsData = await hotelApi.getHotels(hotelRequest);
                setHotels(hotelsData);

                // Fetch flight data
                console.log(flightRequest);
                const flightsData = await flightApi.getRoundWayFlights(flightRequest);
                setFlights(flightsData);

                // Combine hotel and flight data to generate packages
                const combinedPackages = packageBuilderService.combineResults(hotelsData, flightsData);

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
        navigate("/services-package-finder");
      }

    return (
        <>
            <CssBaseline />
            <TopContent mainText={packages.length >0 ?"We found the best results for you..." : "Looking for your packages..." }subText="We're here to craft a vacation that perfectly suits you." />
            <Box display="flex" justifyContent="center">
                {isLoading ? (
                    <Loader loadingMessage='Loading packages...'></Loader>
                ) : packages.length > 0 ? (< UpcomingPackages servicePackages={packages} />
                ) : (<Stack justifyContent={'cenetr'} alignItems={'center'} sx={{ m: 8 }}>
                    <Typography variant="h3" color="textSecondary" textAlign={'center'}>
                        Looks like there are no available packages at the moment.
                    </Typography>
                    <Typography variant="h4" color="textSecondary" textAlign={'center'}>
                        Consider altering searching criterias for better results.
                    </Typography>   
                    <ActionButton variant='contained' onClick={handleClickOnSearchAgain} style={{ width: '350px', height: '80px' }}>Let's search again</ActionButton>
                </Stack>
                )}
            </Box>
            <Footer />
        </>
    );
};

export default PackageSearchResults;
