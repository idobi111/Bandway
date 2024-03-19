import React from 'react';
import { Typography, Grid, TextField } from '@mui/material';
import { HomeSearchGrid, SearchTextField, WindowDiv, ActionButton } from '../../styles/ComponentsStyles';


const HomeSearch: React.FC = () => {
    return (
        <WindowDiv>
            <HomeSearchGrid container spacing={2} justifyContent="center" >
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
        </WindowDiv>
    );
};

export default HomeSearch;
