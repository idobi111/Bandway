import React from 'react';
import { Typography, Stack, Box, Tooltip, Modal } from '@mui/material';
import { Package } from '../../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
import { PackageFilter } from '../../../../models/PackageFilter';
import { ActionButton } from '../../../../styles/ComponentsStyles';
import { HotelApi } from '../../../../apis/HotelApi';
import { Helpers } from '../../../../helpers/helpers';


interface Props {
    servicesPackage: Package | null;
}

const PackageDialogHotelSection: React.FC<Props> = ({ servicesPackage }) => {

    const hotelApi = new HotelApi();
    const helpers = new Helpers();

    const handleSeeHotelAvailability = async () => {
        try {
            const response = await hotelApi.getHotelLink(servicesPackage?.hotel?.hotelId);
            const hotelUrl = response.body;

            window.open(hotelUrl, '_blank');
        } catch (error) {
            console.error('Error fetching hotel URL:', error);
        }
    };

    return (
        <>
            <Stack display={'flex'} sx={{ p: 4 }}>
                <Typography variant='h4'>Your Hotel:</Typography>
                <Typography variant='h5'>{servicesPackage?.hotel.hotelName}</Typography>
                <Typography variant='h6'>
                    {servicesPackage && [...Array(Math.round(servicesPackage.hotel.rating / 2))].map((_, index) => (
                        <StarIcon key={index} />
                    ))}
                </Typography>
                <Typography variant='h6' color='text.secondary'>
                    Rating: {servicesPackage?.hotel.rating}
                </Typography>
                <Typography variant='h6' color='text.secondary'>adults: {servicesPackage?.hotel.adults}, children: {servicesPackage?.hotel.children} </Typography>
                <Typography variant='h6' color='text.secondary'>rooms: {servicesPackage?.hotel.rooms} </Typography>
                <Typography variant='h6'> Start from ${ servicesPackage && helpers.getRoundedPrice(servicesPackage?.hotel.price)} per person</Typography>
                {/* Add onClick event to trigger API request */}
                <ActionButton
                    variant="contained"
                    color="primary"
                    sx={{ width: '300px', fontSize: '20px' }}
                    onClick={handleSeeHotelAvailability} // Call handleSeeHotelAvailability function
                >
                    See hotel availability
                </ActionButton>
            </Stack>

        </>
    );
};

export default PackageDialogHotelSection;
