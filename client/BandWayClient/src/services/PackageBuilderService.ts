import { CarRentalResponse } from "../models/CarRentalResponse";
import { FlightOneWayResponse } from "../models/FlightOneWayResponse";
import { HotelRequest } from "../models/HotelRequest";
import { HotelResponse } from "../models/HotelResponse";
import { Package } from "../models/Package";
import { PackageFilter } from "../models/PackageFilter";

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


  public createCustomHotelRequestByEventData(
    checkIn: string | null,
    venue: string | null,
    fromCity: string | null,
    toCity: string | null
  ): HotelRequest {
    const defaultCheckInDate = new Date(); // Use the current date as default
  const threeDaysFromCheckIn = new Date(defaultCheckInDate.setDate(defaultCheckInDate.getDate() + 3));

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Pad month with leading zero
    const day = String(date.getDate()).padStart(2, '0'); // Pad day with leading zero
    const hours = String(date.getHours()).padStart(2, '0'); // Pad hours with leading zero
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Pad minutes with leading zero
    const seconds = String(date.getSeconds()).padStart(2, '0'); // Pad seconds with leading zero
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0'); // Pad milliseconds with leading zeros
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
  };

  return {
    checkIn: checkIn ? formatDate(new Date(checkIn)) : formatDate(defaultCheckInDate),
    checkOut: checkIn
      ? formatDate(new Date(new Date(checkIn).setDate(new Date(checkIn).getDate() + 3))) // Chain setDate and new Date
      : formatDate(threeDaysFromCheckIn),
    venueName: venue || "", // Use venue if provided, otherwise empty string
    rooms: 1, // Set rooms to 1 by default
    adults: 2, // Set adults to 2 by default
    children: 0, // Set children to 0 by default
    maxPrice: 10000, // Set maxPrice to 10000 by default
    minPrice: 100, // Set minPrice to 100 by default
  };
  }


}




