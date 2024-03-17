import React from 'react';
import EventCard from './EventCard';
import { events } from '../mocks/EventMock';

const HomeUpcomingEvents: React.FC = () => { 

  const step = 6; // Define the step value

  return (
    <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px' }}> {/* Adjust the max width as needed */}
        <h2 style={{ textAlign: 'left' }}>Upcoming Events</h2>
        <EventCard events={events} step={step} />
      </div>
    </div>
  );
};

export default HomeUpcomingEvents;
