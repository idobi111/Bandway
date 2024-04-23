export interface HotelResponse {
    hotelId: number;
    city: string;
    hotelName: string;
    checkIn: string;
    checkOut: string;
    rooms: number;
    adults: number;
    children: number;
    price: number;
    rating: number;
    photoUrl: string[];
    bookingUrl: string;
}
