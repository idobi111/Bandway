export interface HotelOrderRequest {
    userId: number;
    orderDate: Date;
    checkInDate: string;
    checkOutDate: string;
    hotelName: string;
    hotelAddress: string;
    roomCount: number;
    price: number;
    numberOfGuests: number;
}