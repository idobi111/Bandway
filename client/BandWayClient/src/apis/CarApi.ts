import axios from 'axios';
import { HotelResponse } from '../models/HotelResponse';
import { FlightRequest } from '../models/FlightRequest';
import { FlightOneWayResponse } from '../models/FlightOneWayResponse';
import { FlightRoundWayResponse } from '../models/FlightRoundWayResponse';
import { FlightLinkResponse } from '../models/FlightLinkResponse';
import { CarRentalRequest } from '../models/CarRentalRequest';
import { CarRentalResponse } from '../models/CarRentalResponse';
import { CityRespsone } from '../models/City';
import { CarRentalOrderRequest } from "../models/CarRentalOrderRequest";


export class CarApi {

    BASE_URL: string = "https://bandway-server-822235880699.us-west1.run.app/bandway";



    public async getCarRentals(car: CarRentalRequest): Promise<CarRentalResponse> {
        try {
            const response = await axios.post<CarRentalResponse>(`${this.BASE_URL}/searchCarRental`, car);
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


    public async saveCarRentalToDb(carRentalOrderRequest: CarRentalOrderRequest): Promise<void> {
        try {
            await axios.post<void>(`${this.BASE_URL}/saveCarOrder`, carRentalOrderRequest);
        } catch (error) {
            throw new Error('Error store to db');
        }
    }

}