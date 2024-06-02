import axios from 'axios';
import { HotelResponse } from '../models/HotelResponse';
import { HotelRequest } from '../models/HotelRequest';
import { HotelLinkResponse } from '../models/HotelLinkResponse';


export class HotelApi {

    BASE_URL: string = "http://localhost:8080/bandway";


    public async getHotels(hotel: HotelRequest): Promise<HotelResponse[]> {
        try {
       //     const response = await axios.post<HotelResponse[]>(`${this.BASE_URL}/searchHotel`, hotel);
            const response = await axios.get<HotelResponse[]>(`https://mocki.io/v1/1b2cf7c6-d450-4b1a-84e2-c8faa72da48f`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching hotels');
        }
    }

    public async getHotelLink(hotelId: number | undefined): Promise<HotelLinkResponse> {
        try {
           // const response = await axios.get<HotelLinkResponse[]>(`${this.BASE_URL}/...`, hotel);
            const response = await axios.get<HotelLinkResponse>(`https://mocki.io/v1/8774b9d6-7c8a-4974-acf5-0a5aade0c467`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching hotel link');
        }
    }
    
}