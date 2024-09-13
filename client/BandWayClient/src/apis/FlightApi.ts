import axios from 'axios';
import qs from 'qs';
import { HotelResponse } from '../models/HotelResponse';
import { FlightRequest } from '../models/FlightRequest';
import { FlightOneWayResponse } from '../models/FlightOneWayResponse';
import { FlightRoundWayResponse } from '../models/FlightRoundWayResponse';
import { FlightLinkResponse } from '../models/FlightLinkResponse';
import { PackageSearchOrderRequest } from "../models/PackageSearchOrderRequest";
import { FlightOrderRequest } from "../models/FlightOrderRequest";


export class FlightApi {

    BASE_URL: string = "https://bandway-server-822235880699.us-west1.run.app/bandway";

    public async getRoundWayFlights(flight: FlightRequest): Promise<FlightRoundWayResponse> {
        try {
            const response = await axios.post<FlightRoundWayResponse>(`${this.BASE_URL}/searchRoundWayFlight`, flight);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching round way flights');
        }
    }

    public async getFlightLink(token: number, itineraryId: string): Promise<FlightLinkResponse[]> {
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
            return response.data;
        } catch (error) {
            throw new Error('Error fetching round way flights');
        }
    }

    public async saveFlightSearchToDb(flightSearch: FlightOrderRequest): Promise<void> {
        try {
            await axios.post<void>(`${this.BASE_URL}/saveFlightOrder`, flightSearch);
        } catch (error) {
            throw new Error('Error while store flight search to db');
        }
    }

}