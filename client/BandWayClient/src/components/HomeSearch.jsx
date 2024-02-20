import React from 'react';
import { Box, Container, Grid, Typography, TextField } from '@mui/material';
import { HomeSearchGrid, SearchTextField, SearchWindowDiv, ActionButton } from '../styles/ComponentsStyles';
import bandPic from '../pics/BandPic.png';
import bandShadow from '../pics/BandShadow.png';



const HomeSearch = () => {
    return (
        <SearchWindowDiv>
            <HomeSearchGrid container spacing={2} justify="center" >
                <Grid item xs={4}>
                    <Typography>
                        Search Event
                    </Typography>
                    <SearchTextField select label="Search for events, artists or bands..." variant="standard" InputLabelProps={{
                        style: { color: 'gray' },
                        shrink: false
                    }} />
                </Grid>
                <Grid item xs={4}>
                    <Typography>
                        Place
                    </Typography>
                    <SearchTextField select label="All cities" variant="standard" InputLabelProps={{
                        style: { color: 'gray' },
                        shrink: false
                    }} />
                </Grid>
                <Grid item xs={4}>
                    <ActionButton variant='contained'>Search</ActionButton>
                </Grid>
            </HomeSearchGrid>
        </SearchWindowDiv>
    );
};

export default HomeSearch;
