import React from 'react';
import { Grid, Typography } from '@mui/material';
import { StepCircleText, StepArrow } from '../styles/ComponentsStyles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Steps = () => {

    return (
        <Grid container alignItems="center" justifyContent="center" spacing={1}>
            {/* Step 1 */}
            <Grid item xs={2}>
                <StepCircleText>
                    <Typography>Search for the event</Typography>
                </StepCircleText>
            </Grid>

            <Grid item xs={1}>
                {/* <ArrowForwardIosIcon></ArrowForwardIosIcon> */}
            </Grid>

            {/* Step 2 */}
            <Grid item xs={2}>
                <StepCircleText>
                    <Typography>Select your tickets & services</Typography>
                </StepCircleText>
            </Grid>

            <Grid item xs={1}>
                {/* <ArrowForwardIosIcon></ArrowForwardIosIcon> */}
            </Grid>

            {/* Step 3 */}
            <Grid item xs={2}>
                <StepCircleText>
                    <Typography>Checkout & Save</Typography>
                </StepCircleText>
            </Grid>
        </Grid>
    );
};

export default Steps;
