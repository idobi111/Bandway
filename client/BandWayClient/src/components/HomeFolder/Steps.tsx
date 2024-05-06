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
        // <Grid container alignItems="center" justifyContent="center" spacing={1}>
        //     {/* Step 1 */}
        //     <Grid item xs={2}>
        //         <StepCircleText>
        //             <Typography>Search for the event</Typography>
        //         </StepCircleText>
        //     </Grid>

        //     <Grid item xs={1}>
        //         {/* <ArrowForwardIosIcon></ArrowForwardIosIcon> */}
        //     </Grid>

        //     {/* Step 2 */}
        //     <Grid item xs={2}>
        //         <StepCircleText>
        //             <Typography>Select your tickets & services</Typography>
        //         </StepCircleText>
        //     </Grid>

        //     <Grid item xs={1}>
        //         {/* <ArrowForwardIosIcon></ArrowForwardIosIcon> */}
        //     </Grid>

        //     {/* Step 3 */}
        //     <Grid item xs={2}>
        //         <StepCircleText>
        //             <Typography>Checkout & Save</Typography>
        //         </StepCircleText>
        //     </Grid>
        // </Grid>
    );
};

export default Steps;
