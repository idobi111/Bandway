import React, { useState } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { HomeSearchGrid, WindowDiv, ActionButton } from '../../styles/ComponentsStyles';
import DatePickerPopover from './DatePickerPopover';
import OccupancyPopover from './OccupancyPopover';
import ServicesBudgetPopover from './ServicesBudgetPopover';
import { CityOption } from '../../models/CityOption';
import CitySelect from '../GenericFolder/CitySelect';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/types';
import { SearchPackageData } from '../../models/SearchPackageData';
import { setPackageData } from '../../redux/actions';
import { useNavigate } from 'react-router';

const PackageSearch: React.FC = () => {

  const eventData = useSelector((state: AppState) => state.eventData);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [packageData, setPackage] = useState<SearchPackageData>({
    checkIn: eventData?.checkIn ?? null,
    checkOut: eventData?.checkIn ? eventData.checkIn + 3 : null,
    rooms: 1,
    adults: 2,
    children: 0,
    maxPrice: 10000,
    minPrice: 100,
    fromCity: eventData?.fromCity ?? null,
    fromCountry: eventData?.fromCountry ?? null,
    toCity: eventData?.toCity ?? null,
    toCountry: eventData?.toCountry ?? null,
  });

  // Function to check if all fields in searchData are filled
  const isSearchDataFilled = () => {
    return Object.values(packageData).every(value => value !== null && value !== '');
  };


  const handleSelectDateRange = (checkIn: string, checkOut: string) => {
    setPackage({ ...packageData, checkIn, checkOut });
  };

  const handleSelectOccupancy = (adults: number, children: number, rooms: number) => {
    setPackage({ ...packageData, adults, children, rooms });
  };

  const handleSelectServicesBudget = (minPrice: number, maxPrice: number) => {
    setPackage({ ...packageData, minPrice, maxPrice });
  };

  const handleSelectFromCity = (city: CityOption) => {
    setPackage({ ...packageData, fromCity: city.value, fromCountry: city.country });
  };

  const handleSelectToCity = (city: CityOption) => {
    setPackage({ ...packageData, toCity: city.value, toCountry: city.country });
  };

  const handlPerformerSearch = () => {
  
    dispatch(setPackageData(packageData));


    navigate(`/package-search-results`);
  };


  return (
    <WindowDiv>
      <HomeSearchGrid container spacing={2} sx={{ marginLeft: '40px' }}>
        <Grid item xs={2}>
          <DatePickerPopover onSelect={handleSelectDateRange} />
        </Grid>
        <Grid item xs={2}>
          <OccupancyPopover onSelect={handleSelectOccupancy} />
        </Grid>
        <Grid item xs={2}>
          <ServicesBudgetPopover onSelect={handleSelectServicesBudget} />
        </Grid>
        <Grid item xs={2}>
          <CitySelect onSelect={handleSelectFromCity} placeholder={eventData ? `${eventData.fromCity}, ${eventData.fromCountry}` : "All Cities"} title='From' />
        </Grid>
        <Grid item xs={2}>
          <CitySelect onSelect={handleSelectToCity} placeholder={eventData ? `${eventData.toCity}, ${eventData.toCountry}` : "All Cities"} title='To' />
        </Grid>
        <Grid item xs={2}>
          {isSearchDataFilled() && (<ActionButton variant='contained' onClick={handlPerformerSearch}>Search</ActionButton>)}
        </Grid>
        <Box display={'flex'} justifyContent={'left'} alignItems={'left'}>
          {!isSearchDataFilled() && (<Typography padding={2}>Choose your preferences to activate the search</Typography>)}
        </Box>
      </HomeSearchGrid>
    </WindowDiv>
  );
};

export default PackageSearch;
