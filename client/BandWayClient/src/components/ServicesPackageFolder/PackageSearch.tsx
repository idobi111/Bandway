import React from 'react';
import { Typography, Grid } from '@mui/material';
import { HomeSearchGrid, WindowDiv, ActionButton } from '../../styles/ComponentsStyles';
import DatePickerPopover from './DatePickerPopover';
import OccupancyPopover from './OccupancyPopover';
import ServicesBudgetPopover from './ServicesBudgetPopover';
import { CityOption } from '../../models/CityOption';
import CitySelect from '../GenericFolder/CitySelect';

const PackageSearch: React.FC = () => {
  const handleSelectFromCity = (city: CityOption) => {
    console.log('Selected From city:', city);
  };

  const handleSelectToCity = (city: CityOption) => {
    console.log('Selected To city:', city);
  };

  return (
    <WindowDiv>
      <HomeSearchGrid container spacing={2} justifyContent="center" sx={{ marginLeft: '40px' }}>
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
          <CitySelect onSelect={handleSelectFromCity} placeholder='All Cities' title='From' />
        </Grid>
        <Grid item xs={2}>
          <CitySelect onSelect={handleSelectToCity} placeholder='All Cities' title='To' />
        </Grid>
        <Grid item xs={2}>
          <ActionButton variant='contained'>Search</ActionButton>
        </Grid>
      </HomeSearchGrid>
    </WindowDiv>
  );
};

export default PackageSearch;
