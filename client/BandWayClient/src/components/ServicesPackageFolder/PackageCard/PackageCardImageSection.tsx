import React, { useContext, useState } from 'react';
import { Typography, Stack, Box, Tooltip } from '@mui/material';

import { Package } from '../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
import { FlightService } from '../../../services/FlightService';
import FlightIcon from '@mui/icons-material/Flight';
import { EventCardMediaStyled } from '../../../styles/ComponentsStyles';
import { SearchEventDataContext } from '../../EventFolder/EventSearchResults';


interface Props {
  servicesPackage: Package;
}

const PackageCardImageSection: React.FC<Props> = ({ servicesPackage}) => {

  const searchEventData = useContext(SearchEventDataContext);


  const flightService = new FlightService();

  return (
    <>
      <Box position="relative">
        <EventCardMediaStyled
          style={{ height: 140 }}
          image={servicesPackage.hotel.photoUrl[0]}
          title={servicesPackage.hotel.city}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{
            position: 'absolute',
            bottom: '20px', // Adjusted bottom position
            left: '10px', // Adjusted left position
            color: 'white',
            fontWeight: 'bold',
            zIndex: 1,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Corrected shadow opacity
          }}
        >
          {servicesPackage.flight?.departFlightDetails[0].destCity || searchEventData.toCity}
        </Typography>
        <Typography
          variant="h6" // Changed variant to h6 for smaller font size
          component="div"
          sx={{
            position: 'absolute',
            bottom: '0', // Adjusted bottom position
            left: '10px', // Adjusted left position
            color: 'white',
            zIndex: 1,
          }}
        >
          {servicesPackage.flight?.departFlightDetails[0].destCountry || searchEventData.toCountry}
        </Typography>
      </Box>
    </>
  );
};

export default PackageCardImageSection;
