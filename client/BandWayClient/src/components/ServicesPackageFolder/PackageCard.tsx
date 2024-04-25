import React, { useState } from 'react';
import { Divider, Card, CardContent, CardMedia, Typography, Grid, Button, Modal, Box, Stack, Tooltip } from '@mui/material';
import { Event } from '../../models/EventResponse';
import { EventCardStyled, EventCardMediaStyled, LoadMoreButton, ActionButton, SubActionButton } from '../../styles/ComponentsStyles';
import { useNavigate } from "react-router-dom";
import { Package } from '../../models/Package';
import { Helpers } from '../../helpers/helpers';
import { FlightService } from '../../services/FlightService';
import { PackageBuilderService } from '../../services/PackageBuilderService';
import FlightIcon from '@mui/icons-material/Flight';
import StarIcon from '@mui/icons-material/Star';



interface Props {
  packages: Package[];
  step: number; // Step value to determine how many more events to load each time
}

const helpers = new Helpers();
const flightService = new FlightService();
const packageBuilderService = new PackageBuilderService();

const PackageCard: React.FC<Props> = ({ packages, step }) => {
  const [visiblePackages, setVisiblePackages] = useState(step); // State to track the number of visible events

  const loadMore = () => {
    setVisiblePackages(prevVisiblePackages => prevVisiblePackages + step); // Increase the number of visible events
  };




  return (
    <>
      <Grid container justifyContent="center" spacing={3}>
        {packages.slice(0, visiblePackages).map(servicesPackage => ( // Slice events based on the visibleEvents state
          <Grid item xs={12} sm={6} md={4} key={servicesPackage.packageId}> {/* Each card occupies 12 columns on extra small screens, 6 columns on small screens, and 4 columns on medium screens */}
            <EventCardStyled>
              <Box position="relative">
                <EventCardMediaStyled
                  style={{ height: 140 }}
                  image={servicesPackage.hotel.photoUrl[0]}
                  title={servicesPackage.hotel.city}
                />
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    position: 'absolute',
                    bottom: '20px', // Adjusted bottom position
                    left: '10px', // Adjusted left position
                    color: 'white',
                    fontWeight: 'bold',
                    zIndex: 1,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Corrected shadow opacity
                  }}
                >
                  {servicesPackage.flight?.departFlightDetails[0].destCity}
                </Typography>
                <Typography
                  variant="h6" // Changed variant to h6 for smaller font size
                  component="div"
                  sx={{
                    position: 'absolute',
                    bottom: '0', // Adjusted bottom position
                    left: '10px', // Adjusted left position
                    color: 'white',
                    zIndex: 1,
                  }}
                >
                  {servicesPackage.flight?.departFlightDetails[0].destCountry}
                </Typography>
              </Box>
              <CardContent>
                <Typography variant="h6">
                  {helpers.formatDate(servicesPackage.hotel.checkIn)} &middot; {helpers.calculateNumberOfNights(servicesPackage.hotel.checkIn, servicesPackage.hotel.checkOut)} nights
                </Typography>
                <Divider></Divider>
                <Stack justifyContent="left" alignItems="left" sx={{ display: 'flex' }} >
                  <Typography variant="h6" >
                    {servicesPackage.hotel.hotelName}
                  </Typography>

                  <Typography variant="body2">
                    {[...Array(Math.round(servicesPackage.hotel.rating / 2))].map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {servicesPackage.hotel.rating}
                  </Typography>
                </Stack>
                <Divider></Divider>
                <Box display={'flex'} justifyContent={'left'}  >
                  <Tooltip title={`Number of flights: ${servicesPackage.flight?.departFlightDetails[0].flightDetails.length}`}>
                    {flightService.isConnectionFlight(servicesPackage) ? (
                      <FlightIcon /> // Render FlightIcon
                    ) : (
                      <img src={servicesPackage.flight?.departFlightDetails[0].marketing[0].logoUrl} alt="Flight Icon" />
                    )}
                  </Tooltip>
                  <Typography variant="h6" sx={{ marginLeft: 1 }}>
                    {flightService.getFlightType(servicesPackage)}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {flightService.getFlightHours(servicesPackage)}
                </Typography>
                <Divider></Divider>
                <Box display={'flex'} justifyContent={'right'} alignItems={'right'}>
                  <Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '10px' }}>
                      Start from
                    </Typography>
                    <Typography variant="h6" >
                      ${packageBuilderService.getPackagePrice(servicesPackage)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      per person
                    </Typography>
                  </Stack>
                </Box>
              </CardContent>
            </EventCardStyled>
          </Grid>
        ))}
      </Grid>
      {visiblePackages < packages.length && ( // Render the "Load More" button if there are more events to load
        <div style={{ textAlign: 'center', marginTop: '20px', paddingBottom: '20px' }}>
          <LoadMoreButton variant="outlined" onClick={loadMore}>
            Load More
          </LoadMoreButton>
        </div>
      )}


    </>
  );
};

export default PackageCard;
