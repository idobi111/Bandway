import React, { useState } from 'react';
import { Typography, TextField, Autocomplete } from '@mui/material';
import { LocationApi } from '../../apis/LocationApi';
import { CityOption } from '../../models/CityOption';
import { SearchAutoComplete } from '../../styles/ComponentsStyles';
import { ArtistOption } from '../../models/ArtistOption';
import { EventApi } from '../../apis/EventApi';
import { useNavigate } from 'react-router';

interface ArtistSelectProps {
  onSelect: (artist: ArtistOption ) => void;
}

const eventApi = new EventApi();

const ArtistSelect: React.FC<ArtistSelectProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ArtistOption[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<ArtistOption | null>(null);

  const navigate = useNavigate();

  const handleArtistSearch = async (newInputValue: string) => {
    setSearchTerm(newInputValue);

    if (newInputValue.length > 2) {
      try {
        const artists = await eventApi.getArtistAutoComplete(newInputValue);
        const formattedArtists = artists.map(artist => ({
          label: `${artist.artistName}`,
          value: artist.artistName
        }));
        setSearchResults(formattedArtists);
      } catch (error) {
        console.error('Error fetching artists:', error);
        setSearchResults([]);
        navigate(`/error`);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <Typography>Search Performer</Typography>
      <SearchAutoComplete sx={{width: '330px'}}
        value={selectedArtist}
        onChange={(event, value) => {
            setSelectedArtist(value as ArtistOption);
          onSelect(value as ArtistOption);
        }}
        inputValue={searchTerm}
        onInputChange={(event, newInputValue) => handleArtistSearch(newInputValue)}
        disablePortal
        options={searchResults}
        renderInput={(params) => <TextField {...params} id="especieField" variant="standard" placeholder="Search for performers, artists or bands..."/>}
      />
    </div>
  );
};

export default ArtistSelect;
