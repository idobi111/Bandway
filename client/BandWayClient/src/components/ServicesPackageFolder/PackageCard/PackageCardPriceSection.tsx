import React, { useState } from 'react';
import {  Typography,Stack, Box, Tooltip  } from '@mui/material';

import { Package } from '../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
import { FlightService } from '../../../services/FlightService';
import FlightIcon from '@mui/icons-material/Flight';
import { PackageBuilderService } from '../../../services/PackageBuilderService';
import { PackageFilter } from '../../../models/PackageFilter';


interface Props {
    servicesPackage: Package;
    packageFilters : PackageFilter;
}



const PackageCardPriceSection: React.FC<Props> = ({ servicesPackage, packageFilters}) => {

    const flightService = new FlightService();
    const packageBuilderService = new PackageBuilderService();

    const roundedPrice = Math.round(packageBuilderService.getPackagePrice(servicesPackage, packageFilters));


    return (
        <>
         <Box display={'flex'} justifyContent={'right'} alignItems={'right'}>
                  <Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
                      Start from
                    </Typography>
                    <Typography variant="h6" >
                      ${roundedPrice}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      per person
                    </Typography>
                  </Stack>
                </Box>
        </>
    );
};

export default PackageCardPriceSection;
