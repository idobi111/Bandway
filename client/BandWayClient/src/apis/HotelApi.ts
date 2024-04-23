import axios from 'axios';
import { HotelResponse } from '../models/HotelResponse';
import { HotelRequest } from '../models/HotelRequest';


export class HotelApi {

    BASE_URL: string = "http://localhost:8080/bandway";


    public async getHotels(hotel: HotelRequest): Promise<HotelResponse[]> {
        try {
          //  const response = await axios.post<HotelResponse[]>(`${this.BASE_URL}/searchHotel`, hotel);
            const response = await axios.get<HotelResponse[]>(`https://mocki.io/v1/f147c523-358c-4f4c-8a90-e7759271405b`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching hotels');
        }
    }
    
}