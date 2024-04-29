import React from 'react';
import { Typography, Stack, Box, Tooltip, Modal } from '@mui/material';
import { Package } from '../../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
import { PackageFilter } from '../../../../models/PackageFilter';
import { ActionButton } from '../../../../styles/ComponentsStyles';
import { HotelApi } from '../../../../apis/HotelApi';
import FlightDetailsGrid from './FlightDetailsGrid';
import { FlightService } from '../../../../services/FlightService';
import { Helpers } from '../../../../helpers/helpers';


interface Props {
    servicesPackage: Package | null;
}

const PackageDialogFlightSection: React.FC<Props> = ({ servicesPackage }) => {

    const hotelApi = new HotelApi();
    const flightService = new FlightService();
    const helpers = new Helpers();

    const handleSeeFlightAvailability = async () => {
        // try {
        //     const response = await hotelApi.getHotelLink(servicesPackage?.hotel?.hotelId);
        //     const hotelUrl = response.body;

        //     window.open("https://www.booking.com/hotel/ie/the-devlin.html?checkin=2024-05-25&checkout=2024-05-28", '_blank');
        // } catch (error) {
        //     console.error('Error fetching hotel URL:', error);
        // }
    };

    return (
        <>
            <Stack display={'flex'} sx={{ p: 4 }}>
                <Typography variant='h4'>Your Flights:</Typography>
                <Typography variant='h6'> {servicesPackage && flightService.getFlightType(servicesPackage)}</Typography>
                {servicesPackage?.flight?.departFlightDetails.map((departDetail, index) => (
                    departDetail.flightDetails.map((flightDetail, flightIndex) => (
                        <Box key={`${index}-${flightIndex}`} sx={{ mb: 2 }}>
                            <FlightDetailsGrid
                                flightDetails={flightDetail}
                                marketing={departDetail.marketing[flightIndex]} 
                            />
                        </Box>
                    ))
                ))}
                 <Typography variant='h6'> Start from ${ servicesPackage && servicesPackage.flight && helpers.getRoundedPrice(servicesPackage?.flight?.departFlightDetails[0].price)} per person</Typography>
                {/* Add onClick event to trigger API request */}
                <ActionButton
                    variant="contained"
                    color="primary"
                    sx={{ width: '300px', fontSize: '20px' }}
                    onClick={handleSeeFlightAvailability} 
                >
                    See flight availability
                </ActionButton>
            </Stack>
        </>
    );
};

export default PackageDialogFlightSection;
