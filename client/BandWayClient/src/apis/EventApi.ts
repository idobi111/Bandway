import axios from 'axios';
import {EventResponse} from '../models/EventResponse';
import {Helpers} from '../helpers/helpers';
import {ArtistResponse} from '../models/ArtistResponse';
import {CarRentalOrderRequest} from "../models/CarRentalOrderRequest";
import { ConcertOrderRequest } from '../models/ConcertOrderRequest';

const helpers = new Helpers();


export class EventApi {

    BASE_URL: string = "https://bandway-server-822235880699.us-west1.run.app/bandway";


    public async getEventsByPerformer(performer: string): Promise<EventResponse[]> {
        try {
            const queryPerformer: string = helpers.replaceSpacesWithUnderscores(performer);
            const response = await axios.get<EventResponse[]>(`${this.BASE_URL}/searchConcert?performer=${queryPerformer}`);

            return response.data;
        } catch (error) {
            throw new Error('Error fetching events by performer');
        }
    }

    public async getUpcomingEvents(): Promise<EventResponse[]> {
        try {
            const response = await axios.get<EventResponse[]>(`${this.BASE_URL}/upcomingConcert`);

            return response.data;
        } catch (error) {
            throw new Error('Error fetching upcoming events');
        }
    }

    public async getArtistAutoComplete(artistName: string): Promise<ArtistResponse[]> {
        try {
            const response = await axios.get<ArtistResponse[]>(`${this.BASE_URL}/artistAutoComplete?artistName=${artistName}`);

            return response.data;
        } catch (error) {
            throw new Error('Error fetching artists');
        }
    }

    public async saveEventToDb(concertOrderRequest: ConcertOrderRequest): Promise<void> {
        try {
            await axios.post<void>(`${this.BASE_URL}/saveConcertOrder`, concertOrderRequest);
        } catch (error) {
            throw new Error('Error store to db');
        }
    }
}