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

const PackageDialogFlightSection: React.FC<Props> = ({ servicesPackage }) => {

    const [expandedAccordion, setExpandedAccordion] = useState<number | false>(false);
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

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

    const handleAccordionChange = (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setAccordionOpen(isExpanded);
        setExpandedAccordion(isExpanded ? panel : false);
    };

    return (
        <>
            <Stack display={'flex'} sx={{ p: 4 }}>
                <Typography variant='h4'>Choose Your Flight:</Typography>
                {servicesPackage?.flights && servicesPackage?.flights.roundWayFlightDetails.map((roundWayDetail, roundWayIndex) => (
                    <Accordion key={roundWayIndex} sx={{ width: '150%', marginBottom: '10px', border: '2px solid #ccc' }} expanded={accordionOpen && expandedAccordion === roundWayIndex}
                    onChange={handleAccordionChange(roundWayIndex)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Stack>
                                <Stack direction={'row'}>
                                    <Typography variant='h6' sx={{ paddingRight: 1 }}>Outbound flights:</Typography>
                                    <Typography variant='h6' color="text.secondary">{flightService.getFlightType(roundWayDetail.departFlightDetails[0])} &middot; {flightService.getFlightData(roundWayDetail.departFlightDetails[0])} &middot; {flightService.getFlightDuration(roundWayDetail.departFlightDetails[0].duration)}</Typography>
                                </Stack>
                                <Stack direction={'row'}>
                                    <Typography variant='h6' sx={{ paddingRight: 1 }}>Return flights:</Typography>
                                    <Typography variant='h6' color="text.secondary">{flightService.getFlightType(roundWayDetail.arriveFlightDetails[0])} &middot; {flightService.getFlightData(roundWayDetail.arriveFlightDetails[0])} &middot; {flightService.getFlightDuration(roundWayDetail.arriveFlightDetails[0].duration)}</Typography>
                                </Stack>
                                <Typography variant='h6' sx={{ paddingRight: 1 }}>Start from ${flightService.getRoundWayFlightPrice(roundWayDetail.departFlightDetails[0], roundWayDetail.arriveFlightDetails[0])} per person</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Divider sx={{ border: '1px solid #ccc' }}></Divider>
                            <React.Fragment>
                                {/* Depart Flight Details */}
                                <Typography variant='h6'>Outbound flights:</Typography>
                                {roundWayDetail.departFlightDetails.map((departDetail, index) => (
                                    departDetail.flightDetails.map((flightDetail, flightIndex) => (
                                        <Box key={`${roundWayIndex}-${index}-${flightIndex}`} sx={{ mb: 2 }}>
                                            <FlightDetailsGrid
                                                flightDetails={flightDetail}
                                                marketing={departDetail.marketing[flightIndex]}
                                                token={servicesPackage.flights?.token}
                                            />
                                        </Box>
                                    ))
                                ))}
                                {/* Arrive Flight Details */}
                                <Typography variant='h6'>Return flights:</Typography>
                                {roundWayDetail.arriveFlightDetails.map((arriveDetail, index) => (
                                    arriveDetail.flightDetails.map((flightDetail, flightIndex) => (
                                        <Box key={`${roundWayIndex}-arrive-${index}-${flightIndex}`} sx={{ mb: 2 }}>
                                            <FlightDetailsGrid
                                                flightDetails={flightDetail}
                                                marketing={arriveDetail.marketing[flightIndex]}
                                                token={servicesPackage.flights?.token}
                                            />
                                        </Box>
                                    ))
                                ))}
                            </React.Fragment>
                            <SubActionButton onClick={() => setExpandedAccordion(false)} variant="contained" color="secondary">Close</SubActionButton>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Stack>
        </>
    );
};

export default PackageDialogFlightSection;
