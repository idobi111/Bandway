import React, { useState } from 'react';
import {  Typography,Stack  } from '@mui/material';

import { Package } from '../../../models/Package';
import StarIcon from '@mui/icons-material/Star';


interface Props {
    servicesPackage: Package;
}



const PackageCardHotelSection: React.FC<Props> = ({ servicesPackage }) => {

    return (
        <>
            <Stack justifyContent="left" alignItems="left" sx={{ display: 'flex' }} >
                <Typography variant="h6" >
                    {servicesPackage.hotel.hotelName}
                </Typography>

                <Typography variant="body2">
                    {[...Array(Math.round(servicesPackage.hotel.rating / 2))].map((_, index) => (
                        <StarIcon key={index} />
                    ))}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rating: {servicesPackage.hotel.rating}
                </Typography>
            </Stack>
        </>
    );
};

export default PackageCardHotelSection;
