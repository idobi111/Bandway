import React, {useContext, useState} from 'react';
import {Typography, Stack, Box, Tooltip, Modal, Divider} from '@mui/material';
import Axios from 'axios'; // Import Axios library

import {Package} from '../../../../models/Package';
import StarIcon from '@mui/icons-material/Star';
import {FlightService} from '../../../../services/FlightService';
import FlightIcon from '@mui/icons-material/Flight';
import {PackageBuilderService} from '../../../../services/PackageBuilderService';
import {PackageFilter} from '../../../../models/PackageFilter';
import {Helpers} from '../../../../helpers/helpers';
import {ActionButton, EventCardMediaStyled} from '../../../../styles/ComponentsStyles';
import {HotelApi} from '../../../../apis/HotelApi';
import PackageDialogHotelSection from './PackageDialogHotelSection';
import PackageDialogFlightSection from './PackageDialogFlightSection';
import {useSelector} from 'react-redux';
import {AppState} from '../../../../redux/types';
import PackageDialogCarSection from './PackageDialogCarSection';
import {useNavigate} from 'react-router';


interface Props {
    servicesPackage: Package | null;
    packageFilters: PackageFilter;
}

const PackageDialog: React.FC<Props> = ({servicesPackage, packageFilters}) => {
    const flightService = new FlightService();
    const packageBuilderService = new PackageBuilderService();
    const helpers = new Helpers();
    const hotelApi = new HotelApi();
    const navigate = useNavigate();


    const eventData = useSelector((state: AppState) => state.eventData);

    return (
        <>
            <Box display="flex">
                <Box sx={{flex: 1}}>
                    <Typography variant='h2' gutterBottom>Your vacation details</Typography>
                    <Stack display={'flex'}>
                        <Typography sx={{paddingLeft: 1}} variant='h4'>Vacation
                            to {servicesPackage?.hotel?.city || servicesPackage?.flights?.roundWayFlightDetails[0].arriveFlightDetails[0].sourceCity}</Typography>
                        <Typography sx={{paddingLeft: 1}}
                                    variant='h4'>{servicesPackage && helpers.formatDatesRange(servicesPackage)}</Typography>
                        <Typography sx={{paddingLeft: 1}}
                                    variant='h4'>{servicesPackage && helpers.calculateNumberOfNights(servicesPackage?.hotel?.checkIn, servicesPackage?.hotel?.checkOut)} nights</Typography>
                    </Stack>
                    <Divider></Divider>
                    {packageFilters.hotel && (
                        <div>
                            <PackageDialogHotelSection servicesPackage={servicesPackage}></PackageDialogHotelSection>
                            <Divider></Divider>
                        </div>
                    )}
                    {packageFilters.flight && (
                        <div>
                            <PackageDialogFlightSection servicesPackage={servicesPackage}
                                                        accordionWidth={150}></PackageDialogFlightSection>
                            <Divider></Divider>
                        </div>
                    )}
                    {packageFilters.carRental && (
                        <div>
                            <PackageDialogCarSection servicesPackage={servicesPackage}
                                                     accordionWidth={150}></PackageDialogCarSection>
                            <Divider></Divider>
                        </div>
                    )}
                </Box>
                <Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                    <img src={servicesPackage?.hotel?.photoUrl[0]} style={{width: '400px', height: '300px'}}></img>
                </Box>
            </Box>
        </>
    );
};

export default PackageDialog;
