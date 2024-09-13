import axios from 'axios';
import { HotelResponse } from '../models/HotelResponse';
import { HotelRequest } from '../models/HotelRequest';
import { HotelLinkResponse } from '../models/HotelLinkResponse';
import { CarRentalOrderRequest } from "../models/CarRentalOrderRequest";
import { HotelOrderRequest } from "../models/HotelOrderRequest";


export class HotelApi {

    BASE_URL: string = "https://bandway-server-822235880699.us-west1.run.app/bandway";


    public async getHotels(hotel: HotelRequest): Promise<HotelResponse[]> {
        try {
            const response = await axios.post<HotelResponse[]>(`${this.BASE_URL}/searchHotel`, hotel);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching hotels');
        }
    }

    public async getHotelLink(hotelId: number | undefined, checkInDate: string | undefined, checkOutDate: string | undefined): Promise<HotelLinkResponse> {
        try {
            const response = await axios.get<HotelLinkResponse>(`${this.BASE_URL}/getHotelLink?hotelId=${hotelId}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching hotel link');
        }
    }


    public async saveHotelToDb(hotelOrderRequest: HotelOrderRequest): Promise<void> {
        try {
            await axios.post<void>(`${this.BASE_URL}/saveHotelOrder`, hotelOrderRequest);
        } catch (error) {
            throw new Error('Error store to db');
        }
    }

}