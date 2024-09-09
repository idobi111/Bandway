import React from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import { HomeTopContainer, BandImage, TypographyTitle, SubTitle, ActionButton, LearnMoreButton } from '../../styles/ComponentsStyles';
import bandPic from '../../pics/BandPic.png';
import bandShadow from '../../pics/BandShadow.png';
import { useNavigate } from 'react-router';

interface HomeTopContentProps {
  scrollToUpcomingEvents: () => void;
}

const HomeTopContent: React.FC<HomeTopContentProps> = ({ scrollToUpcomingEvents }) => {

  const navigate = useNavigate();

  const goToHowItWorks = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/how-it-works');
  };
  

  return (
    <HomeTopContainer maxWidth="xl">
      <Box display="flex" justifyContent="flex-end" style={{ height: "500px" }} >
        <Box display="flex" style={{ height: "500px" }} >
          <BandImage src={bandPic} alt="Band Picture" />
        </Box>
        <Box display="flex" style={{ height: "500px" }} >
          <Stack justifyContent="center" >
            <TypographyTitle variant='h3'>
              Find your next ticket & vacation
            </TypographyTitle>
            <SubTitle variant='h6'>
              Create the perfect ambiance with exclusive package deals designed for your preferred events.
            </SubTitle>
            <Grid container spacing={2}>
              <Grid item>
                {/* Call scrollToUpcomingEvents function when button is clicked */}
                <ActionButton variant='contained' onClick={() => scrollToUpcomingEvents()}>Get Ticket</ActionButton>
                <LearnMoreButton variant='outlined' onClick={goToHowItWorks}>Learn More</LearnMoreButton>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </HomeTopContainer>
  );
};

export default HomeTopContent;
