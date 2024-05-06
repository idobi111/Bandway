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



    public async getCarRentals(car: CarRentalRequest): Promise<CarRentalResponse[]> {
        try {
            //           const response = await axios.post<FlightRoundWayResponse[]>(`${this.BASE_URL}/searchCarRental`, car);
            const response = await axios.get<CarRentalResponse[]>(`https://mocki.io/v1/9b91b783-7c47-45c8-b48f-3f560cd854a3`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching car rental');
        }
    }


}