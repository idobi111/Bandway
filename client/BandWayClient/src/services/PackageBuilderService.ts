import { Helpers } from "../helpers/helpers";
import { CarRentalResponse } from "../models/CarRentalResponse";
import { FlightOneWayResponse } from "../models/FlightOneWayResponse";
import { FlightRequest } from "../models/FlightRequest";
import { HotelRequest } from "../models/HotelRequest";
import { HotelResponse } from "../models/HotelResponse";
import { Package } from "../models/Package";
import { PackageFilter } from "../models/PackageFilter";

const helpers = new Helpers();

export class PackageBuilderService {


  public combineResults(hotels: HotelResponse[], flights?: FlightOneWayResponse[], carRentals?: CarRentalResponse[]): Package[] {
    const packages: Package[] = [];

    hotels.forEach((hotel, index) => {
      const packageId = index + 1; // Generate unique package ID
      const packageObj: Package = { packageId, hotel };

      // Add flight if available
      if (flights && flights[index]) {
        packageObj.flight = flights[index];
      }

      // Add car rental if available
      if (carRentals && carRentals[index]) {
        packageObj.carRental = carRentals[index];
      }

      packages.push(packageObj);
    });

    return packages;
  }

  public getPackagePrice(servicePackage: Package, packageFilters: PackageFilter): number {
    let totalPrice = 0;

    // Add hotel price
    if (packageFilters.hotel && servicePackage.hotel) {
      totalPrice += servicePackage.hotel.price;
    }

    // Add flight price
    if (packageFilters.flight && servicePackage.flight) {
      const departFlightPrice = servicePackage.flight.departFlightDetails.reduce((acc, flight) => acc + flight.price, 0);
      totalPrice += departFlightPrice;
    }

    // Add car rental price
    if (packageFilters.carRental && servicePackage.carRental) {
      totalPrice += servicePackage.carRental.price;
    }

    return totalPrice;
  }


  public createHotelRequestByEventData(
    checkIn: string | null,
    venue: string | null,
    fromCity: string | null,
    toCity: string | null
  ): HotelRequest {
    const defaultCheckInDate = new Date(); // Use the current date as default
    const threeDaysFromCheckIn = new Date(defaultCheckInDate.setDate(defaultCheckInDate.getDate() + 3));


    return {
      checkIn: checkIn ? helpers.formatDateForPackageBuilder(new Date(checkIn)) : helpers.formatDateForPackageBuilder(defaultCheckInDate),
      checkOut: checkIn
        ? helpers.formatDateForPackageBuilder(new Date(new Date(checkIn).setDate(new Date(checkIn).getDate() + 3))) // Chain setDate and new Date
        : helpers.formatDateForPackageBuilder(threeDaysFromCheckIn),
      venueName: venue || "", // Use venue if provided, otherwise empty string
      rooms: 1, // Set rooms to 1 by default
      adults: 2, // Set adults to 2 by default
      children: 0, // Set children to 0 by default
      maxPrice: 10000, // Set maxPrice to 10000 by default
      minPrice: 100, // Set minPrice to 100 by default
    };
  }


  public createFlightRequestByEventData(
    checkIn: string | null,
    fromCityId: string | null,
    toCityId: string | null
  ): FlightRequest {
    // Use the checkIn date for a one-way flight
    const flightDate = checkIn ? new Date(checkIn) : null;

    return {
      departureDate: flightDate ? helpers.formatDateForPackageBuilder(flightDate) : "", // Use checkIn if available, otherwise empty string
      returnDate: flightDate ? helpers.formatDateForPackageBuilder(flightDate) : "", // No checkOut for one-way flights
      src: fromCityId || "", // Use fromCityId if provided, otherwise empty string
      dest: toCityId || "", // Use toCityId if provided, otherwise empty string
      adults: 2, // Set adults to 2 by default
      children: 0, // Set children to 0 by default
      infants: 0, // Set infants to 0 by default
      isRoundTrip: false, // One-way flight
      isMultiCityTrip: false, // Single flight
      isDirectFlight: false, // Information about direct flight might not be available
      isOneWay: true, // One-way flight
      cabinClass: "economy", // Set cabin class to economy by default
    };
  }



}




