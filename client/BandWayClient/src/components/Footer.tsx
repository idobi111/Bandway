import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { BandWayFooter, ActionButton, FooterTitle,FooterItem, FooterCopyRights } from '../styles/ComponentsStyles';


import bandWayLogo from '../pics/BandWayLogo.png';


const Footer: React.FC = () => {
 

  const inputFieldStyle = {
    marginRight: '0.5rem',
  };

  return (
    <BandWayFooter>
      <Grid container spacing={5}>
        {/* Left Section */}
        <Grid item xs={10} sm={4} md={2}>
          <div>
          <img src={bandWayLogo} alt="Logo" style={{ height: '80px', marginRight: '16px' }} />
            <Typography variant="body2" style={{fontSize:'10px'}}>BandWay is a global self-service ticket & vacation platform for live experiences that allows anyone to discover and attend events that resonate with your musical soul, all while enjoying a curated travel experience.</Typography>
          </div>
        </Grid>

        <Grid item xs={10} sm={4} md={2}>
          <FooterTitle>BandWay</FooterTitle>
          <FooterItem>Manage Ticketing</FooterItem>
          <FooterItem>About Us</FooterItem>
          <FooterItem>How it Works</FooterItem>
          <FooterItem>Contact Us</FooterItem>
          <FooterItem>FAQ</FooterItem>
        </Grid>

        <Grid item xs={10} sm={4} md={2}>
          <FooterTitle>Services</FooterTitle>
          <FooterItem>Flights</FooterItem>
          <FooterItem>Hotels</FooterItem>
          <FooterItem>Car Rentals</FooterItem>
          <FooterItem>Public Transportation</FooterItem>
        </Grid>

        <Grid item xs={10} sm={4} md={2}>
          <FooterTitle>Information</FooterTitle>
          <FooterItem>Ticketing Terms</FooterItem>
          <FooterItem>Privacy Terms</FooterItem>
          <FooterItem>Help Center</FooterItem>
        </Grid>

        <Grid item xs={10} sm={4} md={2} >
          <FooterTitle>Stay in the loop</FooterTitle>
          <FooterItem>Join our mailing list to stay in the loop with our newest for Event and concert</FooterItem>
          <ActionButton variant="contained" color="primary">
            Subscribe Now
          </ActionButton>
        </Grid>
      </Grid>
      <FooterCopyRights>Copyright © 2024 Tal Yamin & Ido Bitton</FooterCopyRights>
    </BandWayFooter>
  );
};

export default Footer;
