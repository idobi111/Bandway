import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { HomeTopBox, ShadowImage, BandImage, TypographyTitle, SubTitle, ActionButton, LearnMoreButton } from '../../styles/ComponentsStyles';
import bandPic from '../../pics/BandPic.png';
import bandShadow from '../../pics/BandShadow.png';

const HomeTopContent: React.FC = () => {
  return (
    <HomeTopBox>
      <Box>
        <ShadowImage src={bandShadow} alt="Band Shadow" />
        <BandImage src={bandPic} alt="Band Picture" />
      </Box>
      <Box>
        <TypographyTitle variant='h3'>
          Find your next ticket & vacation
        </TypographyTitle>
        <SubTitle variant='h6'>
          Create the perfect ambiance with exclusive package deals designed for your preferred events.
        </SubTitle>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <ActionButton variant='contained'>Get Ticket</ActionButton>
            <LearnMoreButton variant='outlined'>Learn More</LearnMoreButton>
          </Grid>
        </Grid>
      </Box>
    </HomeTopBox>
  );
};

export default HomeTopContent;