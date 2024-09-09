export interface PackageSearchOrderRequest {
    userId: number;
    orderDate: Date;
    checkInDate: string;
    checkOutDate: string;
    roomCount: number;
    adults: number;
    children: number;
    minHotelPrice: number;
    maxHotelPrice: number;
    minCarPrice: number;
    maxCarPrice: number;
    minFlightPrice: number;
    maxFlightPrice: number;
    fromCity: string;
    toCity: string;
    fromCountry: string;
    toCountry: string;
}
