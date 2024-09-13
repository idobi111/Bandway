import axios from 'axios';
import { Helpers } from '../helpers/helpers';
import { CityRespsone } from '../models/City';

const helpers = new Helpers();


export class LocationApi {

    BASE_URL: string = "https://bandway-server-822235880699.us-west1.run.app/bandway";


    public async getCities(city: string | undefined): Promise<CityRespsone[]> {
        try {
            const response = await axios.get<CityRespsone[]>(`${this.BASE_URL}/flightCityAutoComplete?text=${city}`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching cities');
        }
    }
}