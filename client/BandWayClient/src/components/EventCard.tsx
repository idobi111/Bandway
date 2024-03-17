import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import { Event } from '../models/Event';
import { EventCardStyled, EventCardMediaStyled, LoadMoreButton } from '../styles/ComponentsStyles';

interface Props {
  events: Event[];
  step: number; // Step value to determine how many more events to load each time
}

const EventCard: React.FC<Props> = ({ events, step }) => {
  const [visibleEvents, setVisibleEvents] = useState(step); // State to track the number of visible events

  const loadMore = () => {
    setVisibleEvents(prevVisibleEvents => prevVisibleEvents + step); // Increase the number of visible events
  };

  return (
    <>
      <Grid container justifyContent="center" spacing={3}>
        {events.slice(0, visibleEvents).map(event => ( // Slice events based on the visibleEvents state
          <Grid item xs={12} sm={6} md={4} key={event.id}> {/* Each card occupies 12 columns on extra small screens, 6 columns on small screens, and 4 columns on medium screens */}
            <EventCardStyled>
              <EventCardMediaStyled
                style={{ height: 140 }}
                image={event.imageUrl}
                title={event.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {event.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {event.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {event.description}
                </Typography>
              </CardContent>
            </EventCardStyled>
          </Grid>
        ))}
      </Grid>
      {visibleEvents < events.length && ( // Render the "Load More" button if there are more events to load
        <div style={{ textAlign: 'center', marginTop: '20px', paddingBottom:'20px' }}>
          <LoadMoreButton variant="outlined" onClick={loadMore}>
            Load More
          </LoadMoreButton>
        </div>
      )}
    </>
  );
};

export default EventCard;
