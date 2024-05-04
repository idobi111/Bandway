import axios from 'axios';
import { EventResponse } from '../models/EventResponse';
import { Helpers } from '../helpers/helpers';
import { ArtistResponse } from '../models/ArtistResponse';

const helpers = new Helpers();


export class EventApi {

    BASE_URL: string = "http://localhost:8080/bandway";


    public async getEventsByPerformer(performer: string): Promise<EventResponse[]> {
        try {
            const queryPerformer: string = helpers.replaceSpacesWithUnderscores(performer);
             const response = await axios.get<EventResponse[]>(`${this.BASE_URL}/searchConcert?performer=${queryPerformer}`);
          //  const response = await axios.get<EventResponse[]>(`https://mocki.io/v1/fad6d714-7a57-417e-a45e-087f930ab345`);

            return response.data;
        } catch (error) {
            console.error('Error fetching events by performer:', error);
            return [];
        }
    }

    public async getUpcomingEvents(): Promise<EventResponse[]> {
        try {
             const response = await axios.get<EventResponse[]>(`${this.BASE_URL}/upcomingConcert`);
          //  const response = await axios.get<EventResponse[]>(`https://mocki.io/v1/fad6d714-7a57-417e-a45e-087f930ab345`);

            return response.data;
        } catch (error) {
            console.error('Error fetching upcoming events:', error);
            return [];
        }
    }

    public async getArtistAutoComplete(artistName:string): Promise<ArtistResponse[]> {
        try {
             const response = await axios.get<ArtistResponse[]>(`${this.BASE_URL}/artistAutoComplete?artistName=${artistName}`);
           // const response = await axios.get<ArtistResponse[]>(`https://mocki.io/v1/bf096b39-229d-4f0f-ba13-35ba4dbcde1a`);

            return response.data;
        } catch (error) {
            console.error('Error fetching artists:', error);
            return [];
        }
    }
}