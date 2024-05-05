import React, { useContext, useState } from 'react';
import { Typography, Stack, Box, Tooltip } from '@mui/material';

import { Package } from '../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
import { FlightService } from '../../../services/FlightService';
import FlightIcon from '@mui/icons-material/Flight';
import { EventCardMediaStyled } from '../../../styles/ComponentsStyles';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/types';


interface Props {
  servicesPackage: Package;
}

const PackageCardImageSection: React.FC<Props> = ({ servicesPackage}) => {

  const eventData = useSelector((state: AppState) => state.eventData);

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
          {servicesPackage.hotel.city || servicesPackage.flights?.roundWayFlightDetails[0].arriveFlightDetails[0].sourceCity}
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
        { servicesPackage.flights?.roundWayFlightDetails[0].arriveFlightDetails[0].sourceCountry}
        </Typography>
      </Box>
    </>
  );
};

export default PackageCardImageSection;
