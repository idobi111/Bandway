import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button, Modal, Box, Stack } from '@mui/material';
import { Event } from '../../models/Event';
import { EventCardStyled, EventCardMediaStyled, LoadMoreButton, ActionButton, SubActionButton } from '../../styles/ComponentsStyles';
import { useNavigate } from "react-router-dom";



interface Props {
  events: Event[];
  step: number; // Step value to determine how many more events to load each time
}

const EventCard: React.FC<Props> = ({ events, step }) => {
  const [visibleEvents, setVisibleEvents] = useState(step); // State to track the number of visible events
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null); // State to track the selected event
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the visibility of the modal
  const navigate = useNavigate();

  const handleUserNotifyTicketIsOrdered = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });  
      navigate(`/post-ticket-order?query=${selectedEvent?.performer}`);
    };



  const loadMore = () => {
    setVisibleEvents(prevVisibleEvents => prevVisibleEvents + step); // Increase the number of visible events
  };

  const handleOpenModal = (event: Event) => {
    window.open(event.ticketUrl, '_blank');
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBuyTicket = (response: string) => {
    // Handle the response from the modal
    if (response === 'yes') {
      handleUserNotifyTicketIsOrdered();
    } else {
      // Handle the case when the user did not buy the ticket
      console.log('User did not buy the ticket');
    }
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <Grid container justifyContent="center" spacing={3}>
        {events.slice(0, visibleEvents).map(event => ( // Slice events based on the visibleEvents state
          <Grid item xs={12} sm={6} md={4} key={event.ticketUrl}> {/* Each card occupies 12 columns on extra small screens, 6 columns on small screens, and 4 columns on medium screens */}
            <EventCardStyled onClick={() => handleOpenModal(event)}>
              <EventCardMediaStyled
                style={{ height: 140 }}
                image={event.images[0]}
                title={event.performer}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {event.performer}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: {event.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Venue: {event.venue}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Place: {event.city}, {event.country}
                </Typography>
              </CardContent>
            </EventCardStyled>
          </Grid>
        ))}
      </Grid>
      {visibleEvents < events.length && ( // Render the "Load More" button if there are more events to load
        <div style={{ textAlign: 'center', marginTop: '20px', paddingBottom: '20px' }}>
          <LoadMoreButton variant="outlined" onClick={loadMore}>
            Load More
          </LoadMoreButton>
        </div>
      )}

      {/* Modal for buying ticket */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
          <Typography variant='h3' id="modal-title">Did you order the ticket?</Typography>
          <Stack direction={'row'} justifyContent={"center"} alignItems={"center"} spacing={10} sx={{paddingTop:5}}>
            <ActionButton variant="contained" style={{width:'100px'}} onClick={() => handleBuyTicket('yes')}>Yes</ActionButton>
            <SubActionButton variant="contained" style={{width:'100px'}} onClick={() => handleBuyTicket('no')}>No</SubActionButton>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default EventCard;
