import axios from 'axios';
import { Helpers } from '../helpers/helpers';
import {CityRespsone } from '../models/City';

const helpers = new Helpers();


export class LocationApi {

    BASE_URL: string = "https://server-z732mhjgfq-uc.a.run.app/bandway";


    public async getCities(city: string | undefined): Promise<CityRespsone[]> {
        try {
           const response = await axios.get<CityRespsone[]>(`${this.BASE_URL}/flightCityAutoComplete?text=${city}`);
//              const response = await axios.get<CityRespsone[]>(`https://mocki.io/v1/a9c5c567-503c-433d-abbd-be046cd775f9`);
            return response.data;
        }catch (error) {
            throw new Error('Error fetching cities');
        }
    }
}