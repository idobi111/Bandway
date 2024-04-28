import React, { useEffect, useState } from 'react';
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

const ServicesPackageFinder: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [hotels, setHotels] = useState<HotelResponse[]>([]);

  const mainText: string = "Services Package Finder";
  const subText: string = "Explore our comprehensive service package finder for a complete and enhanced experience !";
  const queryParams = new URLSearchParams(location.search);
  const checkIn = queryParams.get('checkIn');
  const venue = queryParams.get('venue');
  const fromCity = queryParams.get('fromCity');
  const toCity = queryParams.get('toCity');
  const hotelApi = new HotelApi();
  const packageBuilderService = new PackageBuilderService();


  
  useEffect(() => {

    const hotelRequest = packageBuilderService.createCustomHotelRequestByEventData(checkIn, venue, fromCity, toCity);
    console.log(hotelRequest);
    hotelApi.getHotels(hotelRequest)
      .then((data) => {
        setHotels(data)
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching hotels data:', error);
      });


  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <TopContent mainText={mainText} subText={subText} />
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="center" sx={{ m: -5 }}>
          <PackageSearch />
        </Box>
        <Box display="flex" justifyContent="center" sx={{ m: 2 }}>
          {/* <Steps /> */}
        </Box>
        <Box display="flex" justifyContent="center">
          <UpcomingPackages servicePackages={packages} />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default ServicesPackageFinder;
