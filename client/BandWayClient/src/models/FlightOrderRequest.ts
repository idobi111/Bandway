export interface FlightOrderRequest {
    userId: string;
    originCity: string;
    destinationCity: string;
    departureDate: string;
    returnDate: string;
    passengerCount: number;
    price: number;
    orderDate: Date;
}