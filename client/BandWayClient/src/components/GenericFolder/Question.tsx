import React from 'react';
import { Typography, Grid, TextField, Box, Stack, Container } from '@mui/material';
import { HomeSearchGrid, SearchTextField, WindowDiv, ActionButton, GenricWhiteText, SeparateRowsContainer, GenricTopBoxText, SubActionButton } from '../../styles/ComponentsStyles';


interface QuestionProps {
  titleText: string,
  descriptionText: string;
  acceptButtonText: string;
  rejectButtonText: string;
}

const Question: React.FC<QuestionProps> = ({ titleText, descriptionText, acceptButtonText, rejectButtonText }) => {
  return (


    <Container maxWidth="xl">

      <Box display="flex" justifyContent="center">
        <WindowDiv style={{ height: '200px'}}>
          <SeparateRowsContainer>
            <GenricTopBoxText variant='h2'>
              {titleText}
            </GenricTopBoxText>
            <GenricTopBoxText variant='h5'>
              {descriptionText}
            </GenricTopBoxText>
          </SeparateRowsContainer>
        </WindowDiv>
      </Box>

      <Box display="flex" justifyContent="center">
      <Stack direction="row" spacing={20}  sx={{ m: -5 }}>
         <ActionButton>{acceptButtonText}</ActionButton>
         <SubActionButton>{rejectButtonText}</SubActionButton>
       </Stack>
      </Box>

    </Container>



    // <Box display="flex" justifyContent="center">
    //   <WindowDiv>
    //     <SeparateRowsContainer>
    //       <GenricTopBoxText variant='h2'>
    //         {titleText}
    //       </GenricTopBoxText>
    //       <GenricTopBoxText variant='h5'>
    //         {descriptionText}
    //       </GenricTopBoxText>
    //     </SeparateRowsContainer>
    //   </WindowDiv>
    //   <Stack direction="row">
    //     <ActionButton>{acceptButtonText}</ActionButton>
    //     <SubActionButton>{rejectButtonText}</SubActionButton>
    //   </Stack>
    // </Box>
  );
};

export default Question;
