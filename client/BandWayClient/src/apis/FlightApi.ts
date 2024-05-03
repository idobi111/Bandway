import axios from 'axios';
import { HotelResponse } from '../models/HotelResponse';
import { FlightRequest } from '../models/FlightRequest';
import { FlightOneWayResponse } from '../models/FlightOneWayResponse';
import { FlightRoundWayResponse } from '../models/FlightRoundWayResponse';


export class FlightApi {

    BASE_URL: string = "http://localhost:8080/bandway";


    public async getOneWayFlights(flight: FlightRequest): Promise<FlightOneWayResponse[]> {
        try {
            //const response = await axios.post<FlightOneWayResponse[]>(`${this.BASE_URL}/searchOneWayFlight`, flight);
            const response = await axios.get<FlightOneWayResponse[]>(``);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching one way flights');
        }
    }

    public async getRoundWayFlights(flight: FlightRequest): Promise<FlightRoundWayResponse[]> {
        try {
            //           const response = await axios.post<FlightRoundWayResponse[]>(`${this.BASE_URL}/searchRoundWayFlight`, flight);
            const response = await axios.get<FlightRoundWayResponse[]>(`https://mocki.io/v1/0f96418f-fd97-4150-af17-7c74546e6510`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching round way flights');
        }
    }

}