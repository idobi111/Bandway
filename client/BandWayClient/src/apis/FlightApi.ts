import axios from 'axios';
import qs from 'qs';
import { HotelResponse } from '../models/HotelResponse';
import { FlightRequest } from '../models/FlightRequest';
import { FlightOneWayResponse } from '../models/FlightOneWayResponse';
import { FlightRoundWayResponse } from '../models/FlightRoundWayResponse';
import { FlightLinkResponse } from '../models/FlightLinkResponse';


export class FlightApi {

    BASE_URL: string = "https://server-z732mhjgfq-uc.a.run.app/bandway";


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
//             const response = await axios.get<FlightRoundWayResponse>(`https://mocki.io/v1/066ecc1b-d9ca-4f2e-801e-3b26d5d8efde`);
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
              });
            //const response = await axios.get<FlightLinkResponse[]>(`https://mocki.io/v1/a9a8ca5d-c635-43b8-945e-6326a24bac88`);
//             const response = await axios.get<FlightLinkResponse[]>(`https://mocki.io/v1/56550b84-f906-4fff-817b-3026cbeaffb2`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching round way flights');
        }
    }

}