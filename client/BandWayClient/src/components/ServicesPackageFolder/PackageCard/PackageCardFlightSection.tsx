import React, { useState } from 'react';
import {  Typography,Stack, Box, Tooltip  } from '@mui/material';

import { Package } from '../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
import { FlightService } from '../../../services/FlightService';
import FlightIcon from '@mui/icons-material/Flight';


interface Props {
    servicesPackage: Package;
}



const PackageCardFlightSection: React.FC<Props> = ({ servicesPackage }) => {

    const flightService = new FlightService();

    return (
        <>
            <Box display={'flex'} justifyContent={'left'}  >
                  <Tooltip title={`Number of flights: ${servicesPackage.flight?.departFlightDetails[0].flightDetails.length}`}>
                    {flightService.isConnectionFlight(servicesPackage) ? (
                      <FlightIcon /> // Render FlightIcon
                    ) : (
                      <img src={servicesPackage.flight?.departFlightDetails[0].marketing[0].logoUrl} alt="Flight Icon" />
                    )}
                  </Tooltip>
                  <Typography variant="h6" sx={{ marginLeft: 1 }}>
                    {flightService.getFlightType(servicesPackage)}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {flightService.getFlightHours(servicesPackage)}
                </Typography>
        </>
    );
};

export default PackageCardFlightSection;
