export interface RoundWayFlightDetails {
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

export interface RoundWayMarketing {
  logoUrl: string;
  name: string;
}

export interface RoundWayFlightSegment {
  sourceCountry: string;
  sourceCity: string;
  destCountry: string;
  destCity: string;
  flightDetails: RoundWayFlightDetails[];
  marketing: RoundWayMarketing[];
  price: number;
  duration: string;
  stopCount: number;
}

export interface RoundWayFlightData {
  departFlightDetails: RoundWayFlightSegment[];
  arriveFlightDetails: RoundWayFlightSegment[];
}

export interface FlightRoundWayResponse {
  roundWayFlightDetails: RoundWayFlightData[];
  token: number;
  minPrice: number;
}