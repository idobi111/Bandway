export interface HotelRequest {
  checkIn: string;
  checkOut: string;
  venueName: string;
  rooms: number;
  adults: number;
  children: number;
  maxPrice: number;
  minPrice: number;
}