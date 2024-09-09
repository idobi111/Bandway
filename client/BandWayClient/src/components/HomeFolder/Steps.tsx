import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { StepCircleText, StepArrow } from '../../styles/ComponentsStyles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Steps = () => {

    return (

        <>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={4}>
             <StepCircleText>
                     <Typography>Search for your favorite performer</Typography>
              </StepCircleText>
              <ArrowForwardIosIcon></ArrowForwardIosIcon>
              <StepCircleText>
                    <Typography>Select your tickets & services</Typography>
                </StepCircleText>
                <ArrowForwardIosIcon></ArrowForwardIosIcon>
                <StepCircleText>
                    <Typography>Checkout & Save</Typography>
                </StepCircleText>
        </Stack>
        </>
    );
};

export default Steps;
