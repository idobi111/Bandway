import axios from 'axios';
import { HotelResponse } from '../models/HotelResponse';
import { FlightRequest } from '../models/FlightRequest';
import { FlightOneWayResponse } from '../models/FlightOneWayResponse';
import { FlightRoundWayResponse } from '../models/FlightRoundWayResponse';
import { FlightLinkResponse } from '../models/FlightLinkResponse';
import { CarRentalRequest } from '../models/CarRentalRequest';
import { CarRentalResponse } from '../models/CarRentalResponse';
import { CityRespsone } from '../models/City';


export class CarApi {

    BASE_URL: string = "http://localhost:8080/bandway";



    public async getCarRentals(car: CarRentalRequest): Promise<CarRentalResponse> {
        try {
                      const response = await axios.post<CarRentalResponse>(`${this.BASE_URL}/searchCarRental`, car);
//             const response = await axios.get<CarRentalResponse>(`https://mocki.io/v1/3ae113b2-c4c7-40f8-a005-9e2c95b12239`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching car rental');
        }
    }

    public async getCarRentalCity(cityName: string | null): Promise<CityRespsone> {
        try {
            const response = await axios.get<CityRespsone>(`${this.BASE_URL}/carRentalCityAutoComplete?query=${cityName}`);
            console.log("respnse!!!!", response)
            return response.data;
        } catch (error) {
            throw new Error('Error fetching car rental city id');
        }
    }

}