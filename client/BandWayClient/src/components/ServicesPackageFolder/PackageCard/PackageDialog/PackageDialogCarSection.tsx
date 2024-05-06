import React, { useState } from 'react';
import { Typography, Stack, Box, Tooltip, Modal, Accordion, AccordionDetails, AccordionSummary, Divider } from '@mui/material';
import { Package } from '../../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
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


    const handleAccordionChange = (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpandedAccordion(isExpanded ? panel : false);
    };

    return (
        <>
            <Stack display={'flex'} sx={{ p: 4 }}>
                <Typography variant='h4'>Choose Your Car:</Typography>
                {servicesPackage?.carRentals && servicesPackage?.carRentals.map((carData, cardDataIndex) => (
                    <Accordion key={cardDataIndex} sx={{ width: '150%', marginBottom: '10px', border: '2px solid #ccc' }} expanded={expandedAccordion === cardDataIndex}
                        onChange={handleAccordionChange(cardDataIndex)}>
                        <AccordionSummary>
                            <Stack>
                                <Stack direction={'row'}>
                                    <Typography variant='h6' color="text.secondary">{carData.model} &middot; {carData.transmission} &middot; {carData.carGroup} &middot; {carData.seats} seats &middot; {carData.rentalPeriod} days  &middot; ${carData.pricePerDay} per day </Typography>
                                </Stack>
                                <Typography variant='h6' sx={{ paddingRight: 1 }}>Start from ${carData.totalPrice}</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Divider sx={{ border: '1px solid #ccc' }}></Divider>
                            <Stack display={'flex'} sx={{ p: 4 }}>
                                <Typography variant='h5'>{carData.model}</Typography>
                                <Typography variant='h6'>
                                    {[...Array(Math.round(carData.rating / 2))].map((_, index) => (
                                        <StarIcon key={index} />
                                    ))}
                                </Typography>
                                <Typography variant='h6' color='text.secondary'>
                                    Rating: {carData.rating}, {carData.ratingDescription}
                                </Typography>
                                <Typography variant='h6' color='text.secondary'>Pick Up Address: {carData.pickUpAddress} </Typography>
                                <Typography variant='h6' color='text.secondary'>Pick Up Place: {carData.pickUpPlaceName} </Typography>
                                <Typography variant='h6' color='text.secondary'>Drop Off Address: {carData.dropOffAddress} </Typography>
                                <Typography variant='h6' color='text.secondary'>Drop Off Place: {carData.dropOffPlaceName} </Typography>
                                <Typography variant='h6' color='text.secondary'>Supplier: {carData.supplierName} </Typography>
                                <Typography variant='h6'> Start from ${carData.totalPrice}</Typography>
                                {/* Add onClick event to trigger API request */}
                                <ActionButton
                                    variant="contained"
                                    color="primary"
                                    sx={{ width: '300px', fontSize: '20px' }}
                                    // onClick={handleSeeHotelAvailability} // Call handleSeeHotelAvailability function
                                >
                                    See car availability
                                </ActionButton>
                            </Stack>
                            <SubActionButton onClick={() => setExpandedAccordion(false)} variant="contained" color="secondary">Close</SubActionButton>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Stack>
        </>
    );
};

export default PackageDialogCarSection;
