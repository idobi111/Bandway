import React, {useEffect, useState} from 'react';
import EventCard from './EventCard';
import {eventsMock} from '../../mocks/EventMock';
import {EventResponse} from '../../models/EventResponse';
import {Provider} from 'react-redux';
import store from '../../redux/store';


interface UpcomingEventsProps {
    events: EventResponse[];
    title: string;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({title, events}) => {

    const step = 6; // Define the step value

    return (
        <div style={{marginTop: '50px', display: 'flex', justifyContent: 'center'}}>
            <div style={{maxWidth: '1200px'}}> {/* Adjust the max width as needed */}
                <h2 style={{textAlign: 'left'}}>{title}</h2>
                <Provider store={store}>
                    <EventCard events={events} step={step}/>
                </Provider>
            </div>
        </div>
    );
};

export default UpcomingEvents;
