export interface FlightOrderRequest {
    userId: string;
    originCity: string;
    destinationCity: string;
    departureDate: string;
    returnDate: string;
    passengerCount: number;
    price: number;
    airline: string;
    orderDate: string;
}