import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Helpers } from '../../../../helpers/helpers';
import { RoundWayFlightDetails, RoundWayMarketing } from '../../../../models/FlightRoundWayResponse';
import { FlightService } from '../../../../services/FlightService';
import { FlightLinkResponse } from '../../../../models/FlightLinkResponse';
import { FlightApi } from '../../../../apis/FlightApi';
import { ActionButton } from '../../../../styles/ComponentsStyles';
import { Box, Divider, Stack } from '@mui/material';

interface Props {
  flightDetails: RoundWayFlightDetails | undefined;
  marketing: RoundWayMarketing | undefined;
  token: number | undefined;
}

const FlightDetailsGrid: React.FC<Props> = ({ flightDetails, marketing, token }) => {

  const helpers = new Helpers();
  const flightService = new FlightService();
  const flightApi = new FlightApi();
  const [flightLinks, setFlightLinks] = useState<FlightLinkResponse[]>([]);

  const handleSeeFlightPrices = async () => {
    try {
      const response = await flightApi.getFlightLink(token || 0, flightDetails?.id || ' ');
      setFlightLinks(response);
    } catch (error) {
      console.error('Error fetching flight links:', error);
    }
  };

  const handleSeeFlightAvailability = async (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Card variant="outlined" sx={{ backgroundColor: '#f0f0f0' }}>
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Departure from {flightDetails?.departureCityName} {flightDetails?.departureAirport} &middot; {flightDetails?.airline} &middot; {flightDetails?.flightNumber}
        </Typography>
        <Grid container alignItems="left" spacing={1}>
          <Grid item xs={4}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <img src={marketing?.logoUrl} alt={marketing?.name} style={{ width: 30, height: 30 }} />
              </Grid>
              <Grid item sx={{ marginLeft: 2 }}>
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
          <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                <ActionButton variant="contained" color="primary"  sx={{ height: '30px', width: '250px', fontSize: '15px' }} onClick={() => handleSeeFlightAvailability(link.url)}>
                  Check flight availability
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
            onClick={handleSeeFlightPrices}
            sx={{ height: '30px', width: '300px', fontSize: '20px' }}
          >
            See flight price options
          </ActionButton>
        )}
      </CardContent>
    </Card>
  );
};

export default FlightDetailsGrid;
