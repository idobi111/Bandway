import axios from 'axios';
import { HotelResponse } from '../models/HotelResponse';
import { HotelRequest } from '../models/HotelRequest';
import { HotelLinkResponse } from '../models/HotelLinkResponse';


export class HotelApi {

    BASE_URL: string = "http://localhost:8080/bandway";


    public async getHotels(hotel: HotelRequest): Promise<HotelResponse[]> {
        try {
           const response = await axios.post<HotelResponse[]>(`${this.BASE_URL}/searchHotel`, hotel);
//             const response = await axios.get<HotelResponse[]>(`https://mocki.io/v1/4691f32e-14b6-461e-b449-b9f0ee42d3f9`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching hotels');
        }
    }

    public async getHotelLink(hotelId: number | undefined, checkInDate: string | undefined, checkOutDate: string | undefined): Promise<HotelLinkResponse> {
        try {
           const response = await axios.get<HotelLinkResponse>(`${this.BASE_URL}/getHotelLink?hotelId=${hotelId}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`);
//             const response = await axios.get<HotelLinkResponse>(`https://mocki.io/v1/78c000d2-38ba-4a5f-9391-4bfbe5e6854a`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching hotel link');
        }
    }
    
}