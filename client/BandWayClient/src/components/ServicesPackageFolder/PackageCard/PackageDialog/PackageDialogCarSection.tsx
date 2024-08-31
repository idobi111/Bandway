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
import {useNavigate} from 'react-router';
import {useSelector} from "react-redux";
import {AppState} from "../../../../redux/types";
import {CarApi} from "../../../../apis/CarApi";


interface Props {
    servicesPackage: Package | null;
    accordionWidth: number;
}

const PackageDialogCarSection: React.FC<Props> = ({servicesPackage, accordionWidth}) => {

    const [expandedAccordion, setExpandedAccordion] = useState<number | false>(false);

    const flightService = new FlightService();
    const helpers = new Helpers();
    const navigate = useNavigate();
    const eventData = useSelector((state: AppState) => state.eventData);
    const carApi = new CarApi();

    const handleAccordionChange = (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpandedAccordion(isExpanded ? panel : false);
    };

    const handleSeeCarAvailability = async (carLink, carData) => {
        try {
            const carRentalOrderRequest = {
                userId: 123,
                orderDate: new Date(),
                rentalStartDate: carData.checkIn,
                rentalEndDate: carData.checkOut,
                rentalStartLocation: carData.pickUpAddress,
                rentalEndLocation: carData.dropOffPlaceName,
            };
            console.log(carData)
            carApi.saveCarRentalToDb(carRentalOrderRequest);
            window.open(carLink, '_blank');
        } catch (error) {
            console.error('Error opening car link:', error);
            navigate(`/error`);

        }
    };

    return (
        <>
            <Box display="flex">
                <Box sx={{flex: 1}}>
                    <Stack display={'flex'} sx={{p: 4}}>
                        <Typography variant='h4'>Choose Your Car:</Typography>
                        {servicesPackage?.carRentals && servicesPackage?.carRentals.carRentalData.map((carData, cardDataIndex) => (
                            <Accordion key={cardDataIndex} sx={{
                                width: `${accordionWidth}%`,
                                marginBottom: '10px',
                                border: '2px solid #ccc'
                            }} expanded={expandedAccordion === cardDataIndex}
                                       onChange={handleAccordionChange(cardDataIndex)}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Stack sx={{paddingRight: 4}}>
                                        <Stack direction={'row'} sx={{paddingTop: 2}}>
                                            <Typography variant='h6'
                                                        color="text.secondary">{carData.model} &middot; {carData.transmission} &middot; {carData.rentalPeriod} days  &middot; ${helpers.getRoundedPrice(carData.pricePerDay)} per
                                                day </Typography>
                                        </Stack>
                                        <Typography variant='h6' sx={{paddingRight: 1}}>Start from
                                            ${helpers.formatPrice(carData.totalPrice)}</Typography>
                                    </Stack>
                                    <img src={carData.image} style={{width: '150px', height: '100px'}}
                                         alt={`Image of ${carData.model}`}/>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Divider sx={{border: '1px solid #ccc'}}></Divider>
                                    <Stack display={'flex'} sx={{p: 4}}>
                                        <Stack direction={'row'} spacing={2}>
                                            <Typography variant='h5'>{carData.model}</Typography>
                                            <Typography variant='h6'>
                                                {[...Array(Math.round(carData.rating))].map((_, index) => (
                                                    <Tooltip key={index}
                                                             title={`Rating ${carData.rating}, ${carData.ratingDescription}`}
                                                             placement="top">
                                                        <StarIcon/>
                                                    </Tooltip>
                                                ))}
                                            </Typography>
                                        </Stack>
                                        <Typography variant='h6'
                                                    color='text.secondary'>{carData.transmission} &middot; {carData.carGroup} &middot; {carData.seats} seats  &middot; {carData.fuelType} </Typography>
                                        {/*                                         <Stack direction={'row'} spacing={2}> */}
                                        {/*                                             <img src={carData?.supplierLogo} style={{ width: 30, height: 30 }} /> */}
                                        {/*                                             <Typography variant='h6' color='text.secondary' sx={{ paddingBottom: 2 }}>{carData.supplierName} </Typography> */}
                                        {/*                                         </Stack> */}
                                        <Typography variant='h6'>Dates:</Typography>
                                        <Typography variant='h6'
                                                    color='text.secondary' sx={{paddingBottom: 2}}> {helpers.formatDateAndYear(servicesPackage.carRentals?.checkIn)} - {helpers.formatDateAndYear(servicesPackage.carRentals?.checkOut)} </Typography>
                                        <Typography variant='h6'>Pick Up:</Typography>
                                        <Typography variant='body1' color='text.secondary'>{carData.pickUpPlaceName} </Typography>
                                        <Typography variant='h6'
                                                    color='text.secondary' sx={{paddingBottom: 2}}>{eventData.toCity}</Typography>
                                        <Typography variant='h6'> Drop Off: </Typography>
                                        <Typography variant='body1' color='text.secondary'> {carData.dropOffPlaceName} </Typography>
                                        <Typography variant='h6' color='text.secondary' sx={{paddingBottom: 2}}> {eventData.toCity} </Typography>
                                        <Box sx={{marginTop: '20px'}}>
                                            <Divider></Divider>
                                            <Grid container direction="column" spacing={1} sx={{marginTop: '20px'}}>
                                                {carData.dealInfo.map((dealInfo, index) => (
                                                    <Grid item key={index}>
                                                        <Stack direction="row" alignItems={'center'} spacing={2}>
                                                            <Grid item>
                                                                <img src={dealInfo?.supplierLogos}
                                                                     alt={dealInfo?.supplierNames}
                                                                     style={{width: 30, height: 30}}/>
                                                            </Grid>
                                                            <Typography variant="h6">
                                                                {dealInfo.supplierNames} &middot; ${helpers.getRoundedPrice(dealInfo.price)}
                                                            </Typography>
                                                            <ActionButton variant="contained" color="primary" sx={{
                                                                height: '30px',
                                                                width: '250px',
                                                                fontSize: '15px'
                                                            }}
                                                                          onClick={() => handleSeeCarAvailability(dealInfo.carLinks, carData)}>
                                                                See car availability
                                                            </ActionButton>
                                                        </Stack>
                                                    </Grid>
                                                ))}
                                            </Grid>

                                        </Box>
                                    </Stack>
                                    <SubActionButton onClick={() => setExpandedAccordion(false)} variant="contained"
                                                     color="secondary">Close</SubActionButton>
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
