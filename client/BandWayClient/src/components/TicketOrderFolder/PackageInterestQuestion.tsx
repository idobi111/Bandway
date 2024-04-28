import React from 'react';
import { Typography, Grid, TextField, Box, Stack, Container } from '@mui/material';
import { HomeSearchGrid, SearchTextField, WindowDiv, ActionButton, GenricWhiteText, SeparateRowsContainer, GenricTopBoxText, SubActionButton } from '../../styles/ComponentsStyles';
import { useNavigate } from "react-router-dom";


interface QuestionProps {
  titleText: string,
  descriptionText: string;
  acceptButtonText: string;
  rejectButtonText: string;
}


const PackageInterestQuestion: React.FC<QuestionProps> = ({ titleText, descriptionText, acceptButtonText, rejectButtonText }) => {
  const queryParams = new URLSearchParams(location.search);
  const checkIn = queryParams.get('checkIn');
  const venue = queryParams.get('venue');
  const fromCity = queryParams.get('fromCity');
  const toCity = queryParams.get('toCity');

  const navigate = useNavigate();

  const handleUserNotifyInterestedServicesPackage = () => {
    const checkInQueryParam = checkIn ? `checkIn=${checkIn}` : '';
    const venueNameQueryParam = venue ? `venue=${venue}` : '';
    const fromCityQueryParam = fromCity ? `fromCity=${fromCity}` : '';
    const toCityQueryParam = toCity ? `toCity=${toCity}` : '';

    const queryParams = [checkInQueryParam, venueNameQueryParam, fromCityQueryParam, toCityQueryParam].filter(param => !!param).join('&');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/services-package-finder?${queryParams}`);
  };
  
    const handleIsUserInterestedServicesPackseg = (response: string) => {
      if (response === 'yes') {
        handleUserNotifyInterestedServicesPackage();
      } else {
        console.log('User is not interested in services package');
      }
    };


  return (


    <Container maxWidth="xl">

      <Box display="flex" justifyContent="center">
        <WindowDiv style={{ height: '300px', width: '80%' }}>
          <SeparateRowsContainer>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <GenricTopBoxText variant='h2'>
                {titleText}
              </GenricTopBoxText>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <GenricTopBoxText variant='h5' sx={{ textAlign: 'center', width: '600px' }}>
                {descriptionText}
              </GenricTopBoxText>
            </Box>
          </SeparateRowsContainer>
        </WindowDiv>
      </Box>

      <Box display="flex" justifyContent="center">
        <Stack direction="row" spacing={30} sx={{ m: -5, paddingBottom: 10 }}>
          <ActionButton variant='contained' onClick={()=>handleIsUserInterestedServicesPackseg("yes")} style={{ width: '350px', height: '80px' }}>{acceptButtonText}</ActionButton>
          <SubActionButton variant='contained' onClick={()=>handleIsUserInterestedServicesPackseg("no")} style={{ width: '350px', height: '80px' }}>{rejectButtonText}</SubActionButton>
        </Stack>
      </Box>

    </Container>
  );
};

export default PackageInterestQuestion;
