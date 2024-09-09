import React, {useState} from 'react';
import {
    Typography,
    Stack,
    Box,
    Tooltip,
    Modal,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    IconButton,
    Grid
} from '@mui/material';
import {Package} from '../../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {PackageFilter} from '../../../../models/PackageFilter';
import {ActionButton, SubActionButton} from '../../../../styles/ComponentsStyles';
import {HotelApi} from '../../../../apis/HotelApi';
import FlightDetailsGrid from './FlightDetailsGrid';
import {FlightService} from '../../../../services/FlightService';
import {Helpers} from '../../../../helpers/helpers';
import {FlightLinkResponse} from '../../../../models/FlightLinkResponse';
import {FlightApi} from '../../../../apis/FlightApi';
import {useNavigate} from 'react-router';


interface Props {
    servicesPackage: Package | null;
    accordionWidth: number;
}

const PackageDialogFlightSection: React.FC<Props> = ({servicesPackage, accordionWidth}) => {

    const [expandedAccordion, setExpandedAccordion] = useState<number | false>(false);
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
    const [flightLinks, setFlightLinks] = useState<FlightLinkResponse[]>([]);

    const navigate = useNavigate();


    const hotelApi = new HotelApi();
    const flightService = new FlightService();
    const helpers = new Helpers();
    const flightApi = new FlightApi();


    const handleAccordionChange = (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setAccordionOpen(isExpanded);
        setExpandedAccordion(isExpanded ? panel : false);
        setFlightLinks([]);
    };


    const handleSeeFlightPrices = async (flighId: string) => {
        try {
            const response = await flightApi.getFlightLink(servicesPackage && servicesPackage.flights?.token || 0, flighId || ' ');
            setFlightLinks(response);
        } catch (error) {
            console.error('Error fetching flight links:', error);
            navigate(`/error`);
        }
    };

    const handleSeeFlightAvailability = async (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <Stack display={'flex'} sx={{p: 4}}>
                <Typography variant='h4'>{ servicesPackage?.flights && servicesPackage?.flights?.roundWayFlightDetails.length > 0 ? "Choose Your Flight:" :"No Flights are available" }</Typography>
                {servicesPackage?.flights && servicesPackage?.flights.roundWayFlightDetails.map((roundWayDetail, roundWayIndex) => (
                    <Accordion key={roundWayIndex}
                               sx={{width: `${accordionWidth}%`, marginBottom: '10px', border: '2px solid #ccc'}}
                               expanded={accordionOpen && expandedAccordion === roundWayIndex}
                               onChange={handleAccordionChange(roundWayIndex)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <Stack>
                                <Stack direction={'row'}>
                                    <Typography variant='h6' sx={{paddingRight: 1}}>Outbound flights:</Typography>
                                    <Typography variant='h6'
                                                color="text.secondary">{flightService.getFlightType(roundWayDetail.departFlightDetails[0])} &middot; {flightService.getFlightData(roundWayDetail.departFlightDetails[0])} &middot; {flightService.getFlightDuration(roundWayDetail.departFlightDetails[0].duration)}</Typography>
                                </Stack>
                                <Stack direction={'row'}>
                                    <Typography variant='h6' sx={{paddingRight: 1}}>Return flights:</Typography>
                                    <Typography variant='h6'
                                                color="text.secondary">{flightService.getFlightType(roundWayDetail.arriveFlightDetails[0])} &middot; {flightService.getFlightData(roundWayDetail.arriveFlightDetails[0])} &middot; {flightService.getFlightDuration(roundWayDetail.arriveFlightDetails[0].duration)}</Typography>
                                </Stack>
                                <Typography variant='h6' sx={{paddingRight: 1}}>Start from
                                    ${flightService.getRoundWayFlightPrice(roundWayDetail.departFlightDetails[0])} per
                                    person</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Divider sx={{border: '1px solid #ccc'}}></Divider>
                            <React.Fragment>
                                {/* Depart Flight Details */}
                                <Typography variant='h6'>Outbound flights:</Typography>
                                {roundWayDetail.departFlightDetails.map((departDetail, index) => (
                                    departDetail.flightDetails.map((flightDetail, flightIndex) => (
                                        <Box key={`${roundWayIndex}-${index}-${flightIndex}`} sx={{mb: 2}}>
                                            <FlightDetailsGrid
                                                flightDetails={flightDetail}
                                                marketing={departDetail.marketing[flightIndex]}
                                            />
                                        </Box>
                                    ))
                                ))}
                                {/* Arrive Flight Details */}
                                <Typography variant='h6'>Return flights:</Typography>
                                {roundWayDetail.arriveFlightDetails.map((arriveDetail, index) => (
                                    arriveDetail.flightDetails.map((flightDetail, flightIndex) => (
                                        <Box key={`${roundWayIndex}-arrive-${index}-${flightIndex}`} sx={{mb: 2}}>
                                            <FlightDetailsGrid
                                                flightDetails={flightDetail}
                                                marketing={arriveDetail.marketing[flightIndex]}
                                            />
                                        </Box>
                                    ))
                                ))}
                            </React.Fragment>
                            <Stack>
                                {flightLinks.length > 0 ? (
                                    <Box sx={{marginTop: '20px'}}>
                                        <Divider></Divider>
                                        <Grid container direction="column" spacing={1} sx={{marginTop: '20px'}}>
                                            {flightLinks.map((link, index) => (
                                                <Grid item key={index}>
                                                    <Stack direction="row" alignItems={'center'} spacing={2}>
                                                        <Typography variant="h6">
                                                            {link.agencyName} &middot; ${link.price}
                                                        </Typography>
                                                        <ActionButton variant="contained" color="primary" sx={{
                                                            height: '30px',
                                                            width: '250px',
                                                            fontSize: '15px'
                                                        }} onClick={() => handleSeeFlightAvailability(link.url)}>
                                                            See flight availability
                                                        </ActionButton>
                                                    </Stack>
                                                </Grid>
                                            ))}
                                        </Grid>

                                    </Box>
                                ) : (
                                    <ActionButton
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleSeeFlightPrices(roundWayDetail.departFlightDetails[0].flightDetails[0].id)}
                                        sx={{height: '30px', width: '300px', fontSize: '20px'}}
                                    >
                                        See flight price options
                                    </ActionButton>
                                )}
                                <SubActionButton onClick={() => setExpandedAccordion(false)} variant="contained"
                                                 color="secondary" sx={{
                                    height: '30px',
                                    width: '80px',
                                    fontSize: '20px'
                                }}>Close</SubActionButton>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Stack>
        </>
    );
};

export default PackageDialogFlightSection;
