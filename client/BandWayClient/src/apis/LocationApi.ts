import axios from 'axios';
import { Helpers } from '../helpers/helpers';
import { CityRespsone } from '../models/City';

const helpers = new Helpers();


export class LocationApi {

    BASE_URL: string = "http://localhost:8080/bandway";


    public async getCities(city: string | undefined): Promise<CityRespsone[]> {
        try {
            const response = await axios.get<CityRespsone[]>(`${this.BASE_URL}/flightCityAutoComplete?text=${city}`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching cities');
        }
    }
}