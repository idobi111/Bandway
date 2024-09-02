import React from 'react';
import {Typography, Stack, Box, Tooltip, Modal} from '@mui/material';
import {Package} from '../../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
import {PackageFilter} from '../../../../models/PackageFilter';
import {ActionButton} from '../../../../styles/ComponentsStyles';
import {HotelApi} from '../../../../apis/HotelApi';
import {Helpers} from '../../../../helpers/helpers';
import {useNavigate} from 'react-router';
import {useSelector} from "react-redux";
import {AppState} from "../../../../redux/types";


interface Props {
    servicesPackage: Package | null;
}

const PackageDialogHotelSection: React.FC<Props> = ({servicesPackage}) => {

    const hotelApi = new HotelApi();
    const helpers = new Helpers();
    const navigate = useNavigate();
    const userData = useSelector((state: AppState) => state.userData);


    const handleSeeHotelAvailability = async () => {
        try {
            const hotelOrderRequest ={
                userId: localStorage.getItem("userId"),
                orderDate: new Date(),
                checkInDate: servicesPackage.hotel.checkIn,
                checkOutDate: servicesPackage.hotel.checkOut,
                hotelName: servicesPackage.hotel.hotelName,
                roomCount: servicesPackage.hotel.rooms,
                price: servicesPackage.hotel.price,
                numberOfGuests: servicesPackage.hotel.adults + servicesPackage.hotel.children,
            }
            hotelApi.saveHotelToDb(hotelOrderRequest);
            const hotelUrl = await hotelApi.getHotelLink(servicesPackage?.hotel?.hotelId, servicesPackage?.hotel?.checkIn, servicesPackage?.hotel?.checkOut);
            window.open(hotelUrl, '_blank');
        } catch (error) {
            console.error('Error fetching hotel URL:', error);
            navigate(`/error`);
        }
    };

    return (
        <>
            <Stack display={'flex'} sx={{p: 4}}>
                <Typography variant='h4'>Your Hotel:</Typography>
                <Typography variant='h5'>{servicesPackage?.hotel && servicesPackage?.hotel.hotelName}</Typography>
                <Typography variant='h6'>
                    {servicesPackage && [...Array(Math.round((servicesPackage?.hotel ? servicesPackage.hotel.rating : 2) / 2))].map((_, index) => (
                        <StarIcon key={index}/>
                    ))}
                </Typography>
                <Typography variant='h6' color='text.secondary'>
                    Rating: {servicesPackage?.hotel && servicesPackage?.hotel.rating}
                </Typography>
                <Typography variant='h6'
                            color='text.secondary'>adults: {servicesPackage?.hotel && servicesPackage?.hotel.adults},
                    children: {servicesPackage?.hotel && servicesPackage?.hotel.children} </Typography>
                <Typography variant='h6'
                            color='text.secondary'>rooms: {servicesPackage?.hotel && servicesPackage?.hotel.rooms} </Typography>
                <Typography variant='h6'> Start from
                    ${servicesPackage && helpers.getRoundedPrice(servicesPackage?.hotel ? servicesPackage?.hotel.price : 1)} per
                    person</Typography>
                {/* Add onClick event to trigger API request */}
                <ActionButton
                    variant="contained"
                    color="primary"
                    sx={{width: '300px', fontSize: '20px'}}
                    onClick={handleSeeHotelAvailability} // Call handleSeeHotelAvailability function
                >
                    See hotel availability
                </ActionButton>
            </Stack>

        </>
    );
};

export default PackageDialogHotelSection;
