import React, { useState } from 'react';
import { Typography, TextField, Autocomplete } from '@mui/material';
import { LocationApi } from '../../apis/LocationApi';
import { CityOption } from '../../models/CityOption';
import { SearchAutoComplete } from '../../styles/ComponentsStyles';

interface CitySelectProps {
  onSelect: (city: CityOption) => void;
  placeholder: string;
  title: string;
}

const locationApi = new LocationApi();

const CitySelect: React.FC<CitySelectProps> = ({ onSelect, placeholder, title }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<CityOption[]>([]);
  const [selectedCity, setSelectedCity] = useState<CityOption | null>(null);

  const handleCitySearch = async (newInputValue: string) => {
    setSearchTerm(newInputValue);

    if (newInputValue.length > 2) {
      try {
        const cities = await locationApi.getCities(newInputValue);
        const formattedCities = cities.map(city => ({
          label: `${city.name}, ${city.country}`,
          value: city.name,
          id : city.id, 
          country: `${city.country}`
        }));
        setSearchResults(formattedCities);
      } catch (error) {
        console.error('Error fetching cities:', error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <Typography>{title}</Typography>
      <SearchAutoComplete style={{ width: '150px' }}
        value={selectedCity}
        onChange={(event, value) => {
          setSelectedCity(value as CityOption);
          onSelect(value as CityOption);
        }}
        inputValue={searchTerm}
        onInputChange={(event, newInputValue) => handleCitySearch(newInputValue)}
        disablePortal
        options={searchResults}
        renderInput={(params) => <TextField {...params} id="especieField" variant="standard" placeholder={placeholder}/>}
      />
    </div>
  );
};

export default CitySelect;
