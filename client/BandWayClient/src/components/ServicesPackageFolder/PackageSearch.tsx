import React from 'react';
import { Typography, Grid } from '@mui/material';
import { HomeSearchGrid, WindowDiv, ActionButton } from '../../styles/ComponentsStyles';
import DatePickerPopover from './DatePickerPopover';
import OccupancyPopover from './OccupancyPopover';
import ServicesBudgetPopover from './ServicesBudgetPopover';
import CitySelect from './CitySelect';
import { City } from '../../models/City';
import { CityOption } from '../../models/CityOption';

const PackageSearch: React.FC = () => {
  const handleSelectCity = (city: CityOption) => {
    console.log('Selected city:', city);
  };

  return (
    <WindowDiv>
      <HomeSearchGrid container spacing={2} justifyContent="center">
        <Grid item xs={2}>
          <DatePickerPopover />
        </Grid>
        <Grid item xs={2}>
          <OccupancyPopover />
        </Grid>
        <Grid item xs={2}>
          <ServicesBudgetPopover />
        </Grid>
        <Grid item xs={2}>
          <CitySelect onSelect={handleSelectCity} />
        </Grid>
        <Grid item xs={2} sx={{ marginLeft: '40px' }}>
          <ActionButton variant='contained'>Search</ActionButton>
        </Grid>
      </HomeSearchGrid>
    </WindowDiv>
  );
};

export default PackageSearch;
