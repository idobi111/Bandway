export interface FlightRequest {
  departureDate: string;
  returnDate: string;
  src: string;
  dest: string;
  adults: number;
  children: number;
  infants: number;
  isRoundTrip: boolean;
  isMultiCityTrip: boolean;
  isDirectFlight: boolean;
  isOneWay: boolean;
  cabinClass: string;
  }
