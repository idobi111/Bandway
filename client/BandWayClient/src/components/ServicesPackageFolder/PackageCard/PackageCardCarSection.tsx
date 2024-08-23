import React from 'react';
import { Typography, Box } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import { Package } from '../../../models/Package';

interface Props {
    servicesPackage: Package;
}

const PackageCardCarSection: React.FC<Props> = ({ servicesPackage }) => {
    // Check if carRentals is defined and has content
    const hasCarRental = servicesPackage.carRentals && Object.keys(servicesPackage.carRentals.carRentalData).length > 0;

    return (
        <>
            {hasCarRental && (
                <Box display={'flex'} justifyContent={'left'}>
                    <DirectionsCarIcon />
                    <Typography variant="h6" sx={{ marginLeft: 1 }}>
                        Car rental is included
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default PackageCardCarSection;
