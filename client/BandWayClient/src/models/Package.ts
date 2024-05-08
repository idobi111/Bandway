import { CarRentalResponse } from "./CarRentalResponse";
import { FlightOneWayResponse } from "./FlightOneWayResponse";
import { FlightRoundWayResponse } from "./FlightRoundWayResponse";
import { HotelResponse } from "./HotelResponse";


export interface Package {
  packageId: number;
  hotel: HotelResponse;
  flights?: FlightRoundWayResponse;
  carRentals?: CarRentalResponse;
}