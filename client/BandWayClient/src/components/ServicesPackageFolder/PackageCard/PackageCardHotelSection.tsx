import React from 'react';
import {Typography, Stack} from '@mui/material';
import {Package} from '../../../models/Package';
import StarIcon from '@mui/icons-material/Star';

interface Props {
    servicesPackage: Package;
}

const PackageCardHotelSection: React.FC<Props> = ({servicesPackage}) => {
    const generateStars = (rating: number): JSX.Element[] => {
        const starCount = Math.round(rating / 2);
        return Array.from({length: starCount}, (_, index) => <StarIcon key={index}/>);
    };

    return (
        <Stack justifyContent="left" alignItems="left" sx={{display: 'flex'}}>
            <Typography variant="h6">
                {servicesPackage.hotel?.hotelName || 'Hotel Name Unavailable'}
            </Typography>

            <Typography variant="body2">
                {servicesPackage.hotel?.rating && servicesPackage.hotel.rating > 0
                    ? generateStars(servicesPackage.hotel.rating)
                    : 'No rating available'}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                Rating: {servicesPackage.hotel?.rating || 'N/A'}
            </Typography>
        </Stack>
    );
};

export default PackageCardHotelSection;
