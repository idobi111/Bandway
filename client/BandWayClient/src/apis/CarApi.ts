import axios from 'axios';
import { HotelResponse } from '../models/HotelResponse';
import { FlightRequest } from '../models/FlightRequest';
import { FlightOneWayResponse } from '../models/FlightOneWayResponse';
import { FlightRoundWayResponse } from '../models/FlightRoundWayResponse';
import { FlightLinkResponse } from '../models/FlightLinkResponse';
import { CarRentalRequest } from '../models/CarRentalRequest';
import { CarRentalResponse } from '../models/CarRentalResponse';


export class CarApi {

    BASE_URL: string = "http://localhost:8080/bandway";



    public async getCarRentals(car: CarRentalRequest): Promise<CarRentalResponse> {
        try {
            //           const response = await axios.post<FlightRoundWayResponse[]>(`${this.BASE_URL}/searchCarRental`, car);
            const response = await axios.get<CarRentalResponse>(`https://mocki.io/v1/bda8ef09-a860-481a-9dec-8c5515dfb1c3`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching car rental');
        }
    }


}