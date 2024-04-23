import React, { useEffect, useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Header from '../GenericFolder/Header';
import Footer from '../GenericFolder/Footer';
import TopContent from '../GenericFolder/TopContent';
import UpcomingPackages from './UpcomingPackages';
import { Package } from '../../models/Package';
import { packagesMock } from '../../mocks/PackageMock';
import { HotelApi } from '../../apis/HotelApi';
import { HotelRequest } from '../../models/HotelRequest';
import { ResultsPackageMocks } from '../../mocks/ResultsPackageMocks';
import { HotelResponse } from '../../models/HotelResponse';
import { FlightOneWayResponse } from '../../models/FlightOneWayResponse';

const PackageSearchResults: React.FC = () => {
  const [hotels, setHotels] = useState<HotelResponse[]>([]);
  const [Flights, setFlights] = useState<FlightOneWayResponse[]>([]);

    const [packages, setPackages] = useState<Package[]>([]);
    const mainText: string = "We found the best results for you...";
    const subText: string = "We're here to craft a vacation that perfectly suits you.";

    const exampleHotelRequest: HotelRequest = {
        city: "Paris",
        checkIn: "2024-06-15",
        checkOut: "2024-06-20",
        rooms: 1,
        adults: 2,
        children: 1,
        maxPrice: 300,
        minPrice: 100
    };

    useEffect(() => {

        setPackages(ResultsPackageMocks)


        // const hotelApi = new HotelApi();
        // hotelApi.getHotels(exampleHotelRequest)
        //   .then((data) => {
        //     setHotels(data)
        //   })
        //   .catch((error) => {
        //     console.error('Error fetching hotels data:', error);
        //   });    


    }, []);

    return (
        <>
            <CssBaseline />
            <Header />
            <TopContent mainText={mainText} subText={subText} />
            <UpcomingPackages servicePackages={packages} />
            <Footer />
        </>
    );
}

export default PackageSearchResults;
