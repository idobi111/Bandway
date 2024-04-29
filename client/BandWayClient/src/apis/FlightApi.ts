import axios from 'axios';
import { HotelResponse } from '../models/HotelResponse';
import { FlightRequest } from '../models/FlightRequest';
import { FlightOneWayResponse } from '../models/FlightOneWayResponse';


export class FlightApi {

    BASE_URL: string = "http://localhost:8080/bandway";


    public async getOneWayFlights(flight: FlightRequest): Promise<FlightOneWayResponse[]> {
        try {
            //const response = await axios.post<FlightOneWayResponse[]>(`${this.BASE_URL}/searchFlight`, flight);
             const response = await axios.get<FlightOneWayResponse[]>(``);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching one way flights');
        }
    }
    
}