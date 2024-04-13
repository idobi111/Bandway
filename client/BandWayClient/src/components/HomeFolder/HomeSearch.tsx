import React, {useState} from 'react';
import { Typography, Grid, TextField } from '@mui/material';
import { HomeSearchGrid, SearchTextField, WindowDiv, ActionButton } from '../../styles/ComponentsStyles';
import { useNavigate } from "react-router-dom";

const HomeSearch: React.FC = () => {


    const [performerSearchQuery, setPerformerSearchQuery] = useState('');
    const navigate = useNavigate();

    const handlPerformerSearch = () => {
        // Navigate to the search results page with the search query as a URL parameter
        navigate(`/event-search-results?query=${performerSearchQuery}`);
      };

    return (
        <WindowDiv>
            <HomeSearchGrid container spacing={2} justifyContent="center" >
                <Grid item xs={4}>
                    <Typography>
                        Search Performer
                    </Typography>
                    <SearchTextField placeholder="Search for performers, artists or bands..." variant="standard" InputLabelProps={{
                        style: { color: 'gray' },
                        shrink: false,
                    }} value={performerSearchQuery}  onChange={(e) => setPerformerSearchQuery(e.target.value)} />
                </Grid>
                <Grid item xs={4}>
                    <Typography>
                        Place
                    </Typography>
                    <SearchTextField  placeholder="All cities" variant="standard" InputLabelProps={{
                        style: { color: 'gray' },
                        shrink: false
                    }} />
                </Grid>
                <Grid item xs={4}>
                    <ActionButton variant='contained' onClick={handlPerformerSearch}>Search</ActionButton>
                </Grid>
            </HomeSearchGrid>
        </WindowDiv>
    );
};

export default HomeSearch;
