export interface PackageSearchOrderRequest {
    userId: number;
    orderDate: Date;
    checkInDate: string;
    checkOutDate: string;
    roomCount: number;
    adults: number;
    children: number;
    minPrice: number;
    maxPrice: number;
    fromCity: string;
    toCity: string;
    fromCountry: string;
    toCountry: string;
}
