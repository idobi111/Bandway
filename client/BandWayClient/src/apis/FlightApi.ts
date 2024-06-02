import axios from 'axios';
import qs from 'qs';
import { HotelResponse } from '../models/HotelResponse';
import { FlightRequest } from '../models/FlightRequest';
import { FlightOneWayResponse } from '../models/FlightOneWayResponse';
import { FlightRoundWayResponse } from '../models/FlightRoundWayResponse';
import { FlightLinkResponse } from '../models/FlightLinkResponse';


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

    public async getRoundWayFlights(flight: FlightRequest): Promise<FlightRoundWayResponse> {
        try {
                       const response = await axios.post<FlightRoundWayResponse>(`${this.BASE_URL}/searchRoundWayFlight`, flight);
            //const response = await axios.get<FlightRoundWayResponse>(`https://mocki.io/v1/d068852f-b2d4-436d-bae2-30eabfd400e2`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching round way flights');
        }
    }

    public async getFlightLink(token: number, itineraryId : string): Promise<FlightLinkResponse[]> {
        try {
                      const response = await axios.get(`${this.BASE_URL}/flightPrice`, {
                                   params: {
                                     token: token,
                                     itineraryId: itineraryId
                                   },
                                   paramsSerializer: params => {
                                         return qs.stringify(params, { encode: true });
                                   }
                                 });            //const response = await axios.get<FlightLinkResponse[]>(`https://mocki.io/v1/a9a8ca5d-c635-43b8-945e-6326a24bac88`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching round way flights');
        }
    }

}