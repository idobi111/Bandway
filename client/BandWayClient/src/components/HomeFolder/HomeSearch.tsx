import React, { useState } from 'react';
import { Typography, Grid, TextField } from '@mui/material';
import { HomeSearchGrid, SearchTextField, WindowDiv, ActionButton } from '../../styles/ComponentsStyles';
import { useNavigate } from "react-router-dom";
import ArtistSelect from './ArtistSelect';
import { ArtistOption } from '../../models/ArtistOption';
import CitySelect from '../GenericFolder/CitySelect';
import { CityOption } from '../../models/CityOption';

const HomeSearch: React.FC = () => {


    const [performerSearchQuery, setPerformerSearchQuery] = useState('');
    const [selectedPerformer, setSelectedPerformer] = useState<ArtistOption | null>(null);
    const [selectedFromCity, setSelectedFromCity] = useState<CityOption | null>(null);
    const [selectedToCity, setSelectedToCity] = useState<CityOption | null>(null);
    const navigate = useNavigate();
 

    const handlPerformerSearch = () => {
        const performerQueryParam = selectedPerformer ? `performer=${selectedPerformer.value}` : '';
        const fromCityQueryParam = selectedFromCity ? `fromCity=${selectedFromCity.value}` : '';
        const fromCountryQueryParam = selectedFromCity ? `fromCountry=${selectedFromCity.country}` : '';
        const toCityQueryParam = selectedToCity ? `toCity=${selectedToCity.value}` : '';
        const toCountryQueryParam = selectedToCity ? `toCountry=${selectedToCity.country}` : '';
        const fromCityIdQueryParam= selectedFromCity ? `fromCityId=${selectedFromCity.id}` : '';
        const toCityIdQueryParam = selectedToCity ? `toCityId=${selectedToCity.id}` : '';
        const queryParams = [performerQueryParam, fromCityQueryParam, fromCountryQueryParam, toCityQueryParam, toCountryQueryParam,  fromCityIdQueryParam, toCityIdQueryParam].filter(param => !!param).join('&');
      
        navigate(`/event-search-results?${queryParams}`);
      };

    const handleSelectArtist = (artist: ArtistOption) => {
        setSelectedPerformer(artist);
      };
      
      const handleSelectFromCity = (city: CityOption) => {
        setSelectedFromCity(city);
      };
      
      const handleSelectToCity = (city: CityOption) => {
        setSelectedToCity(city);
      };

    return (
        <WindowDiv>
            <HomeSearchGrid container spacing={2} justifyContent="center" >
                <Grid item xs={4}>
                    <ArtistSelect onSelect={handleSelectArtist}></ArtistSelect>
                </Grid>
                <Grid item xs={3}>
                    <CitySelect onSelect={handleSelectFromCity} placeholder='All cities' title='From'></CitySelect>
                </Grid>
                <Grid item xs={2}>
                    <CitySelect onSelect={handleSelectToCity} placeholder='All cities' title='To'></CitySelect>
                </Grid>
                <Grid item xs={2} sx={{ marginLeft: '40px' }}>
                    <ActionButton variant='contained' onClick={handlPerformerSearch}>Search</ActionButton>
                </Grid>
            </HomeSearchGrid>
        </WindowDiv>
    );
};

export default HomeSearch;
