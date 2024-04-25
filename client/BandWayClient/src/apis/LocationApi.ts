import axios from 'axios';
import { Helpers } from '../helpers/helpers';
import { City } from '../models/City';

const helpers = new Helpers();


export class LocationApi {

    BASE_URL: string = "http://localhost:8080/bandway";


    public async getCities(city: string): Promise<City[]> {
        try {
            const response = await axios.get<City[]>(`${this.BASE_URL}/flightAutoCompleteCity?text=${city}`);
//             const response = await axios.get<City[]>(`https://mocki.io/v1/191e92ef-6dec-416d-a3e4-577137c668e8`);

            return response.data;
        } catch (error) {
            console.error('Error fetching cities:', error);
            return [];
        }
    }
}