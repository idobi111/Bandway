interface RoundFlightDetail {
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
  
  interface RoundMarketing {
    logoUrl: string;
    name: string;
  }
  
  interface DepartArriveFlightDetails {
    sourceCountry: string;
    sourceCity: string;
    destCountry: string;
    destCity: string;
    flightDetails: RoundFlightDetail[];
    marketing: RoundMarketing[];
    price: number;
    duration: string;
    stopCount: number;
  }
  
  interface RoundWayFlightDetails {
    departFlightDetails: DepartArriveFlightDetails[];
    arriveFlightDetails: DepartArriveFlightDetails[];
  }
  
  export interface FlightRoundWayResponse {
    roundWayFlightDetails: RoundWayFlightDetails[];
    token: string;
  }
  