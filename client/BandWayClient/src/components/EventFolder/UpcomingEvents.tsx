import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { eventsMock } from '../../mocks/EventMock';
import { EventResponse } from '../../models/EventResponse';



interface UpcomingEventsProps {
  events: EventResponse[]; 
  title: string;
  fromCity: string | null;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({title, events, fromCity}) => { 

  const step = 6; // Define the step value

  return (
    <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1200px' }}> {/* Adjust the max width as needed */}
        <h2 style={{ textAlign: 'left' }}>{title}</h2>
        <EventCard events={events} step={step} fromCity={fromCity} />
      </div>
    </div>
  );
};

export default UpcomingEvents;
