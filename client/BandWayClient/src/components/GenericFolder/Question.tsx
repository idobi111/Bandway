import React from 'react';
import { Typography, Grid, TextField } from '@mui/material';
import { HomeSearchGrid, SearchTextField, WindowDiv, ActionButton, GenricWhiteText, SeparateRowsContainer, GenricTopBoxText } from '../../styles/ComponentsStyles';


interface QuestionProps {
   titleText: string,
   descriptionText: string;
   acceptButtonText: string;
   rejectButtonText: string;
}

const Question: React.FC<QuestionProps> = ({titleText, descriptionText, acceptButtonText, rejectButtonText}) => {
    return (
        <WindowDiv>
          <SeparateRowsContainer>
          <GenricTopBoxText variant='h2'>
            {titleText}
          </GenricTopBoxText>
          <GenricTopBoxText variant='h5'>
            {descriptionText}
          </GenricTopBoxText>
        </SeparateRowsContainer>
        </WindowDiv>
    );
};

export default Question;
