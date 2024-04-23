export interface FlightDetails {
    id: string;
    flightNumber: string;
    departureTime: string;
    arrivalTime: string;
    departureAirport: string;
    departureCityName: string;
    arrivalAirport: string;
    arrivalCityName: string;
    duration: string;
    airline: string;
}

export interface Marketing {
    logoUrl: string;
    name: string;
}

export interface DepartFlight {
    flightDetails: FlightDetails[];
    marketing: Marketing[];
    price: number;
    duration: string;
    token: string;
}

export interface FlightOneWayResponse {
    isSingleWay: boolean;
    departFlightDetails: DepartFlight[];
    arrivalFlightDetails: DepartFlight[] | null;
}