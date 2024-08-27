import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {Helpers} from '../../../../helpers/helpers';
import {RoundWayFlightDetails, RoundWayMarketing} from '../../../../models/FlightRoundWayResponse';
import {FlightService} from '../../../../services/FlightService';
import {FlightLinkResponse} from '../../../../models/FlightLinkResponse';
import {FlightApi} from '../../../../apis/FlightApi';
import {ActionButton} from '../../../../styles/ComponentsStyles';
import {Box, Divider, Stack} from '@mui/material';
import {useNavigate} from 'react-router';

interface Props {
    flightDetails: RoundWayFlightDetails | undefined;
    marketing: RoundWayMarketing | undefined;
}

const FlightDetailsGrid: React.FC<Props> = ({flightDetails, marketing}) => {

    const helpers = new Helpers();
    const flightService = new FlightService();


    return (
        <Card variant="outlined" sx={{backgroundColor: '#f0f0f0'}}>
            <CardContent>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    Departure
                    from {flightDetails?.departureCityName} {flightDetails?.departureAirport} &middot; {flightDetails?.airline} &middot; {flightDetails?.flightNumber}
                </Typography>
                <Grid container alignItems="left" spacing={1}>
                    <Grid item xs={4}>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <img src={marketing?.logoUrl} alt={marketing?.name} style={{width: 30, height: 30}}/>
                            </Grid>
                            <Grid item sx={{marginLeft: 2}}>
                                <Typography variant="h6" component="div">
                                    {helpers.formatHour(flightDetails?.departureTime)}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {helpers.formatDateAndYear(flightDetails?.departureTime)}
                                </Typography>
                                <Typography variant="body2" color={'text.secondary'}>
                                    {flightDetails?.departureCityName}, {flightDetails?.departureAirport}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography variant="body2">
                            {flightDetails && flightService.getFlightDuration(flightDetails.duration)}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" component="div" align="right">
                            {helpers.formatHour(flightDetails?.arrivalTime)}
                        </Typography>
                        <Typography variant="h6" component="div" align="right">
                            {helpers.formatDateAndYear(flightDetails?.arrivalTime)}
                        </Typography>
                        <Typography variant="body2" align="right" color={'text.secondary'}>
                            {flightDetails?.arrivalCityName}, {flightDetails?.arrivalAirport}
                        </Typography>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    );
};

export default FlightDetailsGrid;
