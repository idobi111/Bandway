import React, { useState } from 'react';
import { Typography, Stack, Box, Tooltip, Modal } from '@mui/material';
import Axios from 'axios'; // Import Axios library

import { Package } from '../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
import { FlightService } from '../../../services/FlightService';
import FlightIcon from '@mui/icons-material/Flight';
import { PackageBuilderService } from '../../../services/PackageBuilderService';
import { PackageFilter } from '../../../models/PackageFilter';
import { Helpers } from '../../../helpers/helpers';
import { ActionButton, EventCardMediaStyled } from '../../../styles/ComponentsStyles';
import { HotelApi } from '../../../apis/HotelApi';


interface Props {
    servicesPackage: Package | null;
    packageFilters: PackageFilter;
}

const PackageDialog: React.FC<Props> = ({ servicesPackage, packageFilters }) => {
    const flightService = new FlightService();
    const packageBuilderService = new PackageBuilderService();
    const helpers = new Helpers();
    const hotelApi = new HotelApi();

    const handleSeeHotelAvailability = async () => {
        try {
            const response = await hotelApi.getHotelLink(servicesPackage?.hotel?.hotelId);
            const hotelUrl = response.body;

            window.open("https://www.booking.com/hotel/ie/the-devlin.html?checkin=2024-05-25&checkout=2024-05-28", '_blank');
        } catch (error) {
            console.error('Error fetching hotel URL:', error);
        }
    };

    return (
        <>
            <Box sx={{  maxHeight: '80vh', overflowY: 'auto', width: '80%', maxWidth: '1200px', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                <Box display="flex">
                    <Box sx={{ flex: 1 }}>
                        <Typography variant='h2' gutterBottom>Your vacation details</Typography>
                        <Stack display={'flex'}>
                            <Typography sx={{ paddingLeft: 1 }} variant='h4'>Vacation to  {servicesPackage && servicesPackage.flight?.departFlightDetails[0].destCity}</Typography>
                            <Typography sx={{ paddingLeft: 1 }} variant='h4'>{servicesPackage && helpers.formatDatesRange(servicesPackage)}</Typography>
                            <Typography sx={{ paddingLeft: 1 }} variant='h4'>{servicesPackage && helpers.calculateNumberOfNights(servicesPackage?.hotel?.checkIn, servicesPackage?.hotel.checkOut)} nights</Typography>
                        </Stack>
                        {packageFilters.hotel && (
                            <Stack display={'flex'} sx={{ p: 4 }}>
                                <Typography variant='h4'>Hotel Details:</Typography>
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
                        )}
                    </Box>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <img src={servicesPackage?.hotel.photoUrl[0]} style={{ width: '500px', height: '400px', marginTop: '100px' }}></img>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default PackageDialog;
