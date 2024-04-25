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

interface SourceAndDest {
    sourceCountry: string;
    sourceCity: string;
    destCountry: string;
    destCity: string;
}

export interface DepartFlight extends SourceAndDest {
    flightDetails: FlightDetails[];
    marketing: Marketing[];
    price: number;
    duration: string;
    token: string;
    stopCount: number;
}

export interface FlightOneWayResponse {
    isSingleWay: boolean;
    departFlightDetails: DepartFlight[];
    arrivalFlightDetails: DepartFlight[] | null;
}

export interface FlightResponse extends FlightOneWayResponse {}

