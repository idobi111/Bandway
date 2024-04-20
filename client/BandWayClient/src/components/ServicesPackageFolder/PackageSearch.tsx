import React, { useState } from 'react';
import { Typography, Grid, TextField } from '@mui/material';
import { HomeSearchGrid, SearchTextField, WindowDiv, ActionButton } from '../../styles/ComponentsStyles';
import { useNavigate } from "react-router-dom";
import OccupancyPopover from './OccupancyPopover';
import ServicesBudgetPopover from './ServicesBudgetPopover';
import DatePickerPopover from './DatePickerPopover';


const PackageSearch: React.FC = () => {
    // const [selectedDate, setSelectedDate] = useState<Date>();

    // const handleDateSelection = (newValue: Date) => {
    //     setSelectedDate(newValue);
    // };


    return (
        <WindowDiv>
            <HomeSearchGrid container spacing={2} justifyContent="center" >
                <Grid item xs={2}>
                   <DatePickerPopover></DatePickerPopover>
                </Grid>
                <Grid item xs={2}>
                    <OccupancyPopover></OccupancyPopover>
                </Grid>
                <Grid item xs={2}>
                    <ServicesBudgetPopover></ServicesBudgetPopover>
                </Grid>
                <Grid item xs={2}>
                    <Typography>
                        Place
                    </Typography>
                    <SearchTextField style={{ width: '150px' }} placeholder="Event City" variant="standard" InputLabelProps={{
                        style: { color: 'gray' },
                        shrink: false
                    }} />
                </Grid>
                <Grid item xs={2} sx={{ marginLeft: '40px' }}>
                    <ActionButton variant='contained'>Search</ActionButton>
                </Grid>
            </HomeSearchGrid>
        </WindowDiv>
    );
};

export default PackageSearch;
