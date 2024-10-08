import React, {useState} from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    Grid,
    Modal,
    Stack,
    Typography
} from '@mui/material';
import {Package} from '../../../../models/Package';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ActionButton, SubActionButton} from '../../../../styles/ComponentsStyles';
import {HotelApi} from '../../../../apis/HotelApi';
import FlightDetailsGrid from './FlightDetailsGrid';
import {FlightService} from '../../../../services/FlightService';
import {Helpers} from '../../../../helpers/helpers';
import {FlightLinkResponse} from '../../../../models/FlightLinkResponse';
import {FlightApi} from '../../../../apis/FlightApi';
import {useNavigate} from 'react-router';
import {useSelector} from 'react-redux';
import {RoundWayFlightData} from "../../../../models/FlightRoundWayResponse";
import {AppState} from "../../../../redux/types";
import {FlightOrderRequest} from "../../../../models/FlightOrderRequest";


interface Props {
    servicesPackage: Package | null;
    accordionWidth: number;
}

const PackageDialogFlightSection: React.FC<Props> = ({servicesPackage, accordionWidth}) => {

    const [isRedirectingModalOpen, setIsRedirectingModalOpen] = useState(false); // State for the redirect modal
    const [expandedAccordion, setExpandedAccordion] = useState<number | false>(false);
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
    const [flightLinks, setFlightLinks] = useState<FlightLinkResponse[]>([]);
    const packageData = useSelector((state: AppState) => state.packageData);

    const navigate = useNavigate();


    const flightService = new FlightService();
    const flightApi = new FlightApi();


    const handleAccordionChange = (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setAccordionOpen(isExpanded);
        setExpandedAccordion(isExpanded ? panel : false);
        setFlightLinks([]);
    };


    const handleSeeFlightPrices = async (flighId: string, roundWayDetail: RoundWayFlightData) => {
        try {
            const response = await flightApi.getFlightLink(servicesPackage && servicesPackage.flights?.token || 0, flighId || ' ');
            const flightOrderRequest: FlightOrderRequest = {
                userId: sessionStorage.getItem("userId") ? parseInt(sessionStorage.getItem("userId") as string, 10) || -1 : -1,
                originCity: roundWayDetail.departFlightDetails[0].sourceCity,
                destinationCity: roundWayDetail.arriveFlightDetails[0].sourceCity,
                departureDate: roundWayDetail.departFlightDetails[0].flightDetails[0].departureTime,
                returnDate: roundWayDetail.arriveFlightDetails[0].flightDetails[0].departureTime,
                passengerCount: packageData.adults + packageData.children,
                price: flightService.getRoundWayFlightPrice(roundWayDetail.departFlightDetails[0]),
                orderDate: new Date(),
            }
            flightApi.saveFlightSearchToDb(flightOrderRequest);
            setFlightLinks(response);
        } catch (error) {
            console.error('Error fetching flight links:', error);
            navigate(`/error`);
        }
    };

    const handleSeeFlightAvailability = async (url: string) => {

        setIsRedirectingModalOpen(true);

        setTimeout(() => {
            setIsRedirectingModalOpen(false);
            window.open(url, '_blank');
        }, 3000);
    };

    return (
        <>
            <Stack display={'flex'} sx={{p: 4}}>
                <Typography
                    variant='h4'>{servicesPackage?.flights && servicesPackage?.flights?.roundWayFlightDetails.length > 0 ? "Choose Your Flight:" : "No Flights are available"}</Typography>
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
                                        onClick={() => handleSeeFlightPrices(roundWayDetail.departFlightDetails[0].flightDetails[0].id, roundWayDetail)}
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
                    <Typography variant='body1' id="redirect-modal-description" sx={{mt: 2}}>
                        Please wait while we take you to the purchase page.
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default PackageDialogFlightSection;
