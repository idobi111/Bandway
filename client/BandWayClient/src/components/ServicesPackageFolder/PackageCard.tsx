import React, { useState } from 'react';
import { Divider, Card, CardContent, CardMedia, Typography, Grid, Button, Modal, Box, Stack } from '@mui/material';
import { Event } from '../../models/EventResponse';
import { EventCardStyled, EventCardMediaStyled, LoadMoreButton, ActionButton, SubActionButton } from '../../styles/ComponentsStyles';
import { useNavigate } from "react-router-dom";
import { Package } from '../../models/Package';
import { Helpers } from '../../helpers/helpers';



interface Props {
  packages: Package[];
  step: number; // Step value to determine how many more events to load each time
}

const helpers = new Helpers();

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
              <EventCardMediaStyled
                style={{ height: 140 }}
                image={servicesPackage.hotel.photoUrl[0]}
                title={servicesPackage.hotel.city}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {servicesPackage.hotel.city}
                </Typography>
                <Typography variant="h6">
                  {helpers.formatDate(servicesPackage.hotel.checkIn)} | {helpers.calculateNumberOfNights(servicesPackage.hotel.checkIn, servicesPackage.hotel.checkOut)} nights
                </Typography>
                <Divider></Divider>
                <Typography variant="h6">
                  {servicesPackage.hotel.hotelName}
                </Typography>
                <Divider></Divider>
                <Typography variant="body2">
                  Flight Icon + Flight type:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Flight Hours:
                </Typography>
                <Divider></Divider>
                Package Price: 
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
