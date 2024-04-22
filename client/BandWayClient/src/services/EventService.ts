import axios from 'axios';
import { Event } from '../models/Event';
import { Helpers } from '../helpers/helpers';

const helpers = new Helpers();


export class EventService {

    BASE_URL: string = "http://localhost:8080/bandway";


    public async getEventsByPerformer(performer: string): Promise<Event[]> {
        try {
            const queryPerformer: string = helpers.replaceSpacesWithUnderscores(performer);
             //const response = await axios.get<Event[]>(`${this.BASE_URL}/searchConcert?performer=${queryPerformer}`);
            const response = await axios.get<Event[]>(`https://mocki.io/v1/fad6d714-7a57-417e-a45e-087f930ab345`);

            return response.data;
        } catch (error) {
            console.error('Error fetching events by performer:', error);
            return [];
        }
    }

    public async getUpcomingEvents(): Promise<Event[]> {
        try {
            // const response = await axios.get<Event[]>(`${this.BASE_URL}/...`);
            const response = await axios.get<Event[]>(`https://mocki.io/v1/fad6d714-7a57-417e-a45e-087f930ab345`);

            return response.data;
        } catch (error) {
            console.error('Error fetching upcoming events:', error);
            return [];
        }
    }
}