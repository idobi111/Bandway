import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { HomeTopBox, ShadowImage, BandImage, TypographyTitle, SubTitle, GetTicketButton, LearnMoreButton } from '../styles/HomeTopContentStyles';
import bandPic from '../pics/BandPic.png';
import bandShadow from '../pics/BandShadow.png';

const HomeTopContent = () => {
  return (
    <HomeTopBox>
      <Box>
        <ShadowImage src={bandShadow} />
        <BandImage src={bandPic} />
      </Box>
      <Box>
        <TypographyTitle variant='h3'>
          Find your next ticket & vacation
        </TypographyTitle>
        <SubTitle variant='h6'>
          Create the perfect ambiance with exclusive package deals designed for your preferred events.
        </SubTitle>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <GetTicketButton variant='contained'>Get Ticket</GetTicketButton>
            <LearnMoreButton variant='outlined'>Learn More</LearnMoreButton>
          </Grid>
        </Grid>
      </Box>
    </HomeTopBox>
  );
};

export default HomeTopContent;
