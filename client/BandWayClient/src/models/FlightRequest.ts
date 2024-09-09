export interface FlightRequest {
  departureDate: string;
  returnDate: string;
  src: string;
  dest: string;
  adults: number;
  children: number;
  infants: number;
  isDirectFlight: boolean;
  cabinClass: string;
  minPrice: number;
  maxPrice: number;
  }
