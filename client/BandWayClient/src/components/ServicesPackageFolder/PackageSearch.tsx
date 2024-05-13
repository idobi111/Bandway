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

  const [selectedCheckIn, setSelectedCheckIn] = useState<string | null>(null);
  const [selectedCheckOut, setSelectedCheckOut] = useState<string | null>(null);
  const [selectedAdults, setSelectedAdults] = useState<number | null>(null);
  const [selectedChildren, setSelectedChildren] = useState<number | null>(null);
  const [selectedRooms, setSelectedRooms] = useState<number | null>(null);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState<number | null>(null);
  const [selectedMinPrice, setSelectedMinPrice] = useState<number | null>(null);
  const [selectedFromCity, setSelectedFromCity] = useState<CityOption | null>(null);
  const [selectedToCity, setSelectedToCity] = useState<CityOption | null>(null);


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
    return selectedCheckIn && selectedCheckOut && selectedAdults !== null && selectedAdults >= 0 && selectedChildren !== null && selectedChildren >= 0
      && selectedRooms !== null && selectedRooms >= 0 && selectedMaxPrice && selectedMinPrice && selectedFromCity && selectedToCity;
  };


  const handleSelectDateRange = (checkIn: string, checkOut: string) => {
    setSelectedCheckIn(checkIn);
    setSelectedCheckOut(checkOut);
    setPackage({ ...packageData, checkIn, checkOut });
  };

  const handleSelectOccupancy = (adults: number, children: number, rooms: number) => {
    setSelectedAdults(adults);
    setSelectedChildren(children);
    setSelectedRooms(rooms);
    setPackage({ ...packageData, adults, children, rooms });
  };

  const handleSelectServicesBudget = (minPrice: number, maxPrice: number) => {
    setSelectedMinPrice(minPrice);
    setSelectedMaxPrice(maxPrice);
    setPackage({ ...packageData, minPrice, maxPrice });
  };

  const handleSelectFromCity = (city: CityOption) => {
    setSelectedFromCity(city);
    setPackage({ ...packageData, fromCity: city.value, fromCountry: city.country });
  };

  const handleSelectToCity = (city: CityOption) => {
    setSelectedToCity(city);
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
          <CitySelect onSelect={handleSelectFromCity} placeholder="Select City" title='From' />
        </Grid>
        <Grid item xs={2}>
          <CitySelect onSelect={handleSelectToCity} placeholder="Select City" title='To' />
        </Grid>
        <Grid item xs={2}>
          {(<ActionButton variant='contained' onClick={handlPerformerSearch} disabled={!isSearchDataFilled()}>Search</ActionButton>)}
        </Grid>
      </HomeSearchGrid>
    </WindowDiv>
  );
};

export default PackageSearch;
