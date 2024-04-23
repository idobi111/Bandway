import { FlightOneWayResponse } from "./FlightOneWayResponse";
import { HotelResponse } from "./HotelResponse";


export interface Package {
  packageId: number;
  hotel: HotelResponse;
  flight: FlightOneWayResponse;
}