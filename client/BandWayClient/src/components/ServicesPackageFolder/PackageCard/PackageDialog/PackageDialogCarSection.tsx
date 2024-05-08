import React, { useState } from 'react';
import { Typography, Stack, Box, Tooltip, Modal, Accordion, AccordionDetails, AccordionSummary, Divider, IconButton } from '@mui/material';
import { Package } from '../../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { PackageFilter } from '../../../../models/PackageFilter';
import { ActionButton, SubActionButton } from '../../../../styles/ComponentsStyles';
import { HotelApi } from '../../../../apis/HotelApi';
import FlightDetailsGrid from './FlightDetailsGrid';
import { FlightService } from '../../../../services/FlightService';
import { Helpers } from '../../../../helpers/helpers';


interface Props {
    servicesPackage: Package | null;
}

const PackageDialogCarSection: React.FC<Props> = ({ servicesPackage }) => {

    const [expandedAccordion, setExpandedAccordion] = useState<number | false>(false);

    const flightService = new FlightService();
    const helpers = new Helpers();

    const handleAccordionChange = (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpandedAccordion(isExpanded ? panel : false);
    };

    const handleSeeCarAvailability = async (carLink) => {
        try {
            window.open(carLink, '_blank');
        } catch (error) {
            console.error('Error opening car link:', error);
        }
    };

    return (
        <>
            <Box display="flex">
                <Box sx={{ flex: 1 }}>
                    <Stack display={'flex'} sx={{ p: 4 }}>
                        <Typography variant='h4'>Choose Your Car:</Typography>
                        {servicesPackage?.carRentals && servicesPackage?.carRentals.carRentalData.map((carData, cardDataIndex) => (
                            <Accordion key={cardDataIndex} sx={{ width: '150%', marginBottom: '10px', border: '2px solid #ccc' }} expanded={expandedAccordion === cardDataIndex}
                                onChange={handleAccordionChange(cardDataIndex)}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Stack sx={{ paddingRight: 4 }}>
                                        <Stack direction={'row'} sx={{ paddingTop: 2 }}>
                                            <Typography variant='h6' color="text.secondary">{carData.model} &middot; {carData.transmission} &middot; {carData.rentalPeriod} days  &middot; ${carData.pricePerDay} per day </Typography>
                                        </Stack>
                                        <Typography variant='h6' sx={{ paddingRight: 1 }}>Start from ${carData.totalPrice}</Typography>
                                    </Stack>
                                    <img src={carData.image} style={{ width: '150px', height: '100px' }} alt={`Image of ${carData.model}`} />
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Divider sx={{ border: '1px solid #ccc' }}></Divider>
                                    <Stack display={'flex'} sx={{ p: 4 }}>
                                        <Stack direction={'row'} spacing={2}>
                                            <Typography variant='h5'>{carData.model}</Typography>
                                            <Typography variant='h6'>
                                                {[...Array(Math.round(carData.rating / 2))].map((_, index) => (
                                                    <Tooltip key={index} title={`Rating ${carData.rating}, ${carData.ratingDescription}`} placement="top">
                                                        <StarIcon />
                                                    </Tooltip>
                                                ))}
                                            </Typography>
                                        </Stack>
                                        <Typography variant='h6' color='text.secondary'>{carData.transmission} &middot; {carData.carGroup} &middot; {carData.seats} seats </Typography>
                                        <Stack direction={'row'} spacing={2}>
                                            <img src={carData?.supplierLogo} style={{ width: 30, height: 30 }} />
                                            <Typography variant='h6' color='text.secondary' sx={{ paddingBottom: 2 }}>{carData.supplierName} </Typography>
                                        </Stack>
                                        <Typography variant='h6' >Pick Up:</Typography>
                                        <Typography variant='h6' color='text.secondary'> {helpers.formatDateAndYear(servicesPackage.carRentals?.checkIn)} </Typography>
                                        <Typography variant='h6' color='text.secondary'>{carData.pickUpPlaceName} </Typography>
                                        <Typography variant='body1' color='text.secondary' sx={{ paddingBottom: 2 }}>{carData.pickUpAddress} </Typography>
                                        <Typography variant='h6'> Drop Off: </Typography>
                                        <Typography variant='h6' color='text.secondary'> {helpers.formatDateAndYear(servicesPackage.carRentals?.checkOut)} </Typography>
                                        <Typography variant='h6' color='text.secondary'> {carData.dropOffPlaceName} </Typography>
                                        <Typography variant='body1' color='text.secondary' sx={{ paddingBottom: 2 }}> {carData.dropOffAddress} </Typography>
                                        <Typography variant='h6'> Start from ${carData.totalPrice}</Typography>
                                        {/* Add onClick event to trigger API request */}
                                        <ActionButton
                                            variant="contained"
                                            color="primary"
                                            sx={{ width: '300px', fontSize: '20px' }}
                                            onClick={() => handleSeeCarAvailability(carData.carLink)}
                                        >
                                            See car availability
                                        </ActionButton>
                                    </Stack>
                                    <SubActionButton onClick={() => setExpandedAccordion(false)} variant="contained" color="secondary">Close</SubActionButton>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </>
    );
};

export default PackageDialogCarSection;
