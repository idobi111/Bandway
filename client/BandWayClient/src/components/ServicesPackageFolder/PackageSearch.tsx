import React, {useState} from 'react';
import { Typography, Grid, TextField } from '@mui/material';
import { HomeSearchGrid, SearchTextField, WindowDiv, ActionButton } from '../../styles/ComponentsStyles';
import { useNavigate } from "react-router-dom";

const PackageSearch: React.FC = () => {


   
    return (
        <WindowDiv>
            <HomeSearchGrid container spacing={2} justifyContent="center" >
                <Grid item xs={2}>
                    <Typography>
                        Date Range
                    </Typography>
                    <SearchTextField style={{width:'150px'}} placeholder="Check-in Check-out" variant="standard" InputLabelProps={{
                        style: { color: 'gray' },
                        shrink: false,
                    }} />
                </Grid>
                <Grid item xs={2}>
                    <Typography>
                    Occupancy
                    </Typography>
                    <SearchTextField  style={{width:'150px'}} placeholder="2 adults, 1 child" variant="standard" InputLabelProps={{
                        style: { color: 'gray' },
                        shrink: false
                    }} />
                </Grid>
                <Grid item xs={2}>
                    <Typography>
                    Services Budget
                    </Typography>
                    <SearchTextField style={{width:'150px'}}  placeholder="100$-3000$" variant="standard" InputLabelProps={{
                        style: { color: 'gray' },
                        shrink: false
                    }} />
                </Grid>
                <Grid item xs={2}>
                    <Typography>
                    Place
                    </Typography>
                    <SearchTextField style={{width:'150px'}} placeholder="Event City" variant="standard" InputLabelProps={{
                        style: { color: 'gray' },
                        shrink: false
                    }} />
                </Grid>
                <Grid item xs={2} sx={{marginLeft:'40px'}}>
                    <ActionButton variant='contained'>Search</ActionButton>
                </Grid>
            </HomeSearchGrid>
        </WindowDiv>
    );
};

export default PackageSearch;
