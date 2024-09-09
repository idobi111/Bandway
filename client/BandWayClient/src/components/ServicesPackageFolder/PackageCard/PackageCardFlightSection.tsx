import React, {useState} from 'react';
import {Typography, Stack, Box, Tooltip} from '@mui/material';

import {Package} from '../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
import {FlightService} from '../../../services/FlightService';
import FlightIcon from '@mui/icons-material/Flight';


interface Props {
    servicesPackage: Package;
}


const PackageCardFlightSection: React.FC<Props> = ({servicesPackage}) => {

    const flightService = new FlightService();

    return (
        <>
      { servicesPackage?.flights && servicesPackage?.flights?.roundWayFlightDetails?.length > 0 && (
            <Box display={'flex'} justifyContent={'left'}>
                <FlightIcon/>
                <Typography variant="h6" sx={{marginLeft: 1}}>
                    Flight is included
                </Typography>
            </Box>
        )}
        </>
    );
};

export default PackageCardFlightSection;
