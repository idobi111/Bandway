import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button, Modal, Box, Stack } from '@mui/material';
import { Event } from '../../models/Event';
import { EventCardStyled, EventCardMediaStyled, LoadMoreButton, ActionButton, SubActionButton } from '../../styles/ComponentsStyles';
import { useNavigate } from "react-router-dom";
import { Package } from '../../models/Package';



interface Props {
  packages: Package[];
  step: number; // Step value to determine how many more events to load each time
}

const PackageCard: React.FC<Props> = ({ packages, step }) => {
  const [visiblePackages, setVisiblePackages] = useState(step); // State to track the number of visible events



  const loadMore = () => {
    setVisiblePackages(prevVisiblePackages => prevVisiblePackages + step); // Increase the number of visible events
  };


 
  return (
    <>
      <Grid container justifyContent="center" spacing={3}>
        {packages.slice(0, visiblePackages).map(servicesPackage => ( // Slice events based on the visibleEvents state
          <Grid item xs={12} sm={6} md={4} key={servicesPackage.id}> {/* Each card occupies 12 columns on extra small screens, 6 columns on small screens, and 4 columns on medium screens */}
            <EventCardStyled>
              <EventCardMediaStyled
                style={{ height: 140 }}
                image={servicesPackage.imageUrl}
                title={servicesPackage.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {servicesPackage.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {servicesPackage.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {servicesPackage.description}
                </Typography>
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
