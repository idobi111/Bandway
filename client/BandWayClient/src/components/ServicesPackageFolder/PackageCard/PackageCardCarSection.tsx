import React, {useState} from 'react';
import {Typography, Stack, Box, Tooltip} from '@mui/material';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import {Package} from '../../../models/Package';


interface Props {
    servicesPackage: Package;
}


const PackageCardCarSection: React.FC<Props> = ({servicesPackage}) => {

    return (
        <>
        { servicesPackage?.carRentals && servicesPackage?.carRentals?.carRentalData?.length > 0 && (
            <Box display={'flex'} justifyContent={'left'}>
                <DirectionsCarIcon/>
                <Typography variant="h6" sx={{marginLeft: 1}}>
                    Car rental is included
                </Typography>
            </Box>
        )}
        </>
    );
};

export default PackageCardCarSection;
