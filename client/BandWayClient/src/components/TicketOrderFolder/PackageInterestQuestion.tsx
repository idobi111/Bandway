import React, { useContext } from 'react';
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

  const navigate = useNavigate();


  const handleIsUserInterestedServicesPackseg = (response: string) => {
    if (response === 'yes') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate(`/services-package-finder`);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate(`/thank-you`);
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
          <ActionButton variant='contained' onClick={() => handleIsUserInterestedServicesPackseg("yes")} style={{ width: '350px', height: '80px' }}>{acceptButtonText}</ActionButton>
          <SubActionButton variant='contained' onClick={() => handleIsUserInterestedServicesPackseg("no")} style={{ width: '350px', height: '80px' }}>{rejectButtonText}</SubActionButton>
        </Stack>
      </Box>

    </Container>
  );
};

export default PackageInterestQuestion;
