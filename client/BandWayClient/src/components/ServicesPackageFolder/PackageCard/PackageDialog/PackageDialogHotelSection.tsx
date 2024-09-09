import React, { useState } from 'react';
import { Typography, Stack, Box, Tooltip, Modal } from '@mui/material';
import { Package } from '../../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
import { PackageFilter } from '../../../../models/PackageFilter';
import { ActionButton } from '../../../../styles/ComponentsStyles';
import { HotelApi } from '../../../../apis/HotelApi';
import { Helpers } from '../../../../helpers/helpers';
import { useNavigate } from 'react-router';
import { useSelector } from "react-redux";
import { AppState } from "../../../../redux/types";


interface Props {
    servicesPackage: Package | null;
}

const PackageDialogHotelSection: React.FC<Props> = ({ servicesPackage }) => {

    const [isRedirectingModalOpen, setIsRedirectingModalOpen] = useState(false); // State for the redirect modal

    const hotelApi = new HotelApi();
    const helpers = new Helpers();
    const navigate = useNavigate();
    const userData = useSelector((state: AppState) => state.userData);


    const handleSeeHotelAvailability = async () => {
        try {
            const hotelOrderRequest = {
                userId: localStorage.getItem("userId")
                    ? parseInt(localStorage.getItem("userId") as string, 10) || -1
                    : -1,
                orderDate: new Date(),
                checkInDate: servicesPackage?.hotel?.checkIn ?? "",
                checkOutDate: servicesPackage?.hotel?.checkOut ?? "",
                hotelName: servicesPackage?.hotel?.hotelName ?? "",
                roomCount: servicesPackage?.hotel?.rooms ?? 0,
                price: servicesPackage?.hotel?.price ?? 0,
                numberOfGuests: (servicesPackage?.hotel?.adults ?? 0) + (servicesPackage?.hotel?.children ?? 0),
                hotelAddress: servicesPackage?.hotel?.city ?? ""
            };

            hotelApi.saveHotelToDb(hotelOrderRequest);
            const hotelUrl = await hotelApi.getHotelLink(servicesPackage?.hotel?.hotelId, servicesPackage?.hotel?.checkIn, servicesPackage?.hotel?.checkOut);
            
            setIsRedirectingModalOpen(true); 

            setTimeout(() => {
                setIsRedirectingModalOpen(false); 
                window.open(hotelUrl, '_blank');
            }, 3000); 
            
        } catch (error) {
            console.error('Error fetching hotel URL:', error);
            navigate(`/error`);
        }
    };

    return (
        <>
            <Stack display={'flex'} sx={{ p: 4 }}>
                <Typography variant='h4'>Your Hotel:</Typography>
                <Typography variant='h5'>{servicesPackage?.hotel && servicesPackage?.hotel.hotelName}</Typography>
                <Typography variant='h6'>
                    {servicesPackage && [...Array(Math.round((servicesPackage?.hotel ? servicesPackage.hotel.rating : 2) / 2))].map((_, index) => (
                        <StarIcon key={index} />
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
                    sx={{ width: '300px', fontSize: '20px' }}
                    onClick={handleSeeHotelAvailability} // Call handleSeeHotelAvailability function
                >
                    See hotel availability
                </ActionButton>
            </Stack>
            {/* Modal for redirecting to 3rd party website */}
            <Modal
                open={isRedirectingModalOpen}
                onClose={() => setIsRedirectingModalOpen(false)}
                aria-labelledby="redirect-modal-title"
                aria-describedby="redirect-modal-description"
            >
                <Box style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <Typography variant='h4' id="redirect-modal-title">Redirecting to external provider...</Typography>
                    <Typography variant='body1' id="redirect-modal-description" sx={{ mt: 2 }}>
                        Please wait while we take you to the purchase page.
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default PackageDialogHotelSection;
