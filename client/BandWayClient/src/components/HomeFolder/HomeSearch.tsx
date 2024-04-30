import React, { useState } from 'react';
import { Typography, Grid, TextField } from '@mui/material';
import { HomeSearchGrid, SearchTextField, WindowDiv, ActionButton } from '../../styles/ComponentsStyles';
import { useNavigate } from "react-router-dom";
import ArtistSelect from './ArtistSelect';
import { ArtistOption } from '../../models/ArtistOption';
import CitySelect from '../GenericFolder/CitySelect';
import { CityOption } from '../../models/CityOption';
import { SearchEventData } from '../../models/SearchEventData';
import { EventService } from '../../services/EventService';

const HomeSearch: React.FC = () => {


    const [performerSearchQuery, setPerformerSearchQuery] = useState('');
    const [selectedPerformer, setSelectedPerformer] = useState<ArtistOption | null>(null);
    const [selectedFromCity, setSelectedFromCity] = useState<CityOption | null>(null);
    const [selectedToCity, setSelectedToCity] = useState<CityOption | null>(null);
    const navigate = useNavigate();
    const eventService = new EventService();
 

    const handlPerformerSearch = () => {

        const searchEventData : SearchEventData= {

            performer: selectedPerformer ? selectedPerformer.value : '',
            fromCity:  selectedFromCity ? selectedFromCity.value : '',
            fromCountry: selectedFromCity ? selectedFromCity.country : '',
            toCity: selectedToCity ? selectedToCity.value : '',
            toCountry: selectedToCity ? selectedToCity.country : '',
            fromCityId: selectedFromCity ? selectedFromCity.id : '',
            toCityId: selectedToCity ? selectedToCity.id : ''
        }
        const queryParams = eventService.createSearchQueryParams(searchEventData);
      
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
