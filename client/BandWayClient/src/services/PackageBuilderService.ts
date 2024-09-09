import { CarApi } from "../apis/CarApi";
import { Helpers } from "../helpers/helpers";
import { CarRentalRequest } from "../models/CarRentalRequest";
import { CarRentalResponse } from "../models/CarRentalResponse";
import { FlightOneWayResponse } from "../models/FlightOneWayResponse";
import { FlightRequest } from "../models/FlightRequest";
import { FlightRoundWayResponse } from "../models/FlightRoundWayResponse";
import { HotelRequest } from "../models/HotelRequest";
import { HotelResponse } from "../models/HotelResponse";
import { Package } from "../models/Package";
import { PackageFilter } from "../models/PackageFilter";

const helpers = new Helpers();
const carApi = new CarApi();

export class PackageBuilderService {


  public combineResults(hotels: HotelResponse[], flights?: FlightRoundWayResponse, carRentals?: CarRentalResponse): Package[] {
    const packages: Package[] = [];

    if (hotels.length > 0) {
      hotels.forEach((hotel, index) => {
        const packageId = index + 1; // Generate unique package ID
        const packageObj: Package = { packageId, hotel, flights, carRentals };
        packages.push(packageObj);
      });
    }
    else {
      const packageObj: Package = { packageId: 1, hotel: undefined, flights, carRentals };
      packages.push(packageObj);
    }

    console.log("BuilderService", packages);

    return packages;
  }


  public getPackagePrice(servicePackage: Package, packageFilters: PackageFilter): number {
    let totalPrice = 0;

    // Add hotel price
    if (packageFilters.hotel && servicePackage.hotel) {
      totalPrice += servicePackage.hotel.price;
    }

    // Add flight price
    if (packageFilters.flight && servicePackage.flights && servicePackage.flights.roundWayFlightDetails.length > 0) {
      totalPrice += servicePackage.flights.minPrice * 2;

    }

    //Add car rental price
    if (packageFilters.carRental && servicePackage.carRentals && servicePackage.carRentals.carRentalData.length > 0) {
      totalPrice += servicePackage.carRentals.minPrice;
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
    let threeDaysFromCheckIn;

    if (flightDate) {
      threeDaysFromCheckIn = new Date(flightDate); // Create a copy of flightDate
      threeDaysFromCheckIn.setDate(threeDaysFromCheckIn.getDate() + 3);
      console.log(threeDaysFromCheckIn);
    } else {
      console.log('Check-in date is not provided');
    }
    

    return {
      departureDate: flightDate ? helpers.formatDateForPackageBuilder(flightDate) : "", // Use checkIn if available, otherwise empty string
      returnDate: threeDaysFromCheckIn ? helpers.formatDateForPackageBuilder(threeDaysFromCheckIn) : "", // No checkOut for one-way flights
      src: fromCityId || "", // Use fromCityId if provided, otherwise empty string
      dest: toCityId || "", // Use toCityId if provided, otherwise empty string
      adults: 2, // Set adults to 2 by default
      children: 0, // Set children to 0 by default
      infants: 0, // Set infants to 0 by default
      isDirectFlight: false, // Information about direct flight might not be available
      cabinClass: "economy", // Set cabin class to economy by default
    };
  }


  public async createCarRequestByEventData(
    checkIn: string | null,
    toCity: string | null
  ): Promise<CarRentalRequest> {

    const carRentalDate = checkIn ? new Date(checkIn) : null;
    let threeDaysFromCheckIn;

    if (carRentalDate) {
      threeDaysFromCheckIn = new Date(carRentalDate); // Create a copy of carRentalDate
      threeDaysFromCheckIn.setDate(threeDaysFromCheckIn.getDate() + 3);
      console.log(threeDaysFromCheckIn);
    } else {
      console.log('Check-in date is not provided');
    }


    let toCityData = await carApi.getCarRentalCity(toCity);


    return {
      pickupStartDate: carRentalDate ? helpers.formatDateForPackageBuilder(new Date(carRentalDate)) : helpers.formatDateForPackageBuilder(new Date()),
      dropoffEndDate: carRentalDate ? helpers.formatDateForPackageBuilder(new Date(new Date(carRentalDate).setDate(new Date(carRentalDate).getDate() + 3))) // Chain setDate and new Date
        : helpers.formatDateForPackageBuilder(threeDaysFromCheckIn),
      pickupCity: toCityData ? toCityData[0].id : 'abc',
      dropoffCity: toCityData ? toCityData[0].id : 'abc',
      pickupTime: "10:00",
      dropoffTime: "10:00",
      driverAge: 25,
      carType: ["small"],
      hasHairConditioner: true
    };
  }


  public createHotelRequestByPackageData(
    checkIn: string | null,
    checkOut: string | null,
    venue: string | null,
    rooms: number | null,
    adults: number | null,
    children: number | null,
    maxPrice: number | null,
    minPrice: number | null
  ): HotelRequest {
    const defaultCheckInDate = new Date(); // Use the current date as default
    const threeDaysFromCheckIn = new Date(defaultCheckInDate.setDate(defaultCheckInDate.getDate() + 3));


    return {
      checkIn: checkIn ? helpers.formatDateForPackageBuilder(new Date(checkIn)) : helpers.formatDateForPackageBuilder(defaultCheckInDate),
      checkOut: checkOut
        ? helpers.formatDateForPackageBuilder(new Date(new Date(checkOut))) // Chain setDate and new Date
        : helpers.formatDateForPackageBuilder(threeDaysFromCheckIn),
      venueName: venue || "",
      rooms: rooms || 1, 
      adults: adults || 2,
      children: children || 0, 
      maxPrice: maxPrice || 10000, 
      minPrice: minPrice || 100
    };
  }


  public createFlightRequestByPackageData(
    checkIn: string | null,
    checkOut: string | null, 
    fromCityId: string | null,
    toCityId: string | null,
    adults: number | null, 
    children: number | null, 
  ): FlightRequest {
    // Use the checkIn date for a one-way flight
    const checkInDate = checkIn ? new Date(checkIn) : null;
    const checkOutDate = checkOut ? new Date(checkOut) : null;

    return {
      departureDate: checkInDate ? helpers.formatDateForPackageBuilder(checkInDate) : "", // Use checkIn if available, otherwise empty string
      returnDate: checkOutDate ? helpers.formatDateForPackageBuilder(checkOutDate) : "", // No checkOut for one-way flights
      src: fromCityId || "", 
      dest: toCityId || "", 
      adults: adults || 2, 
      children: children || 0, 
      infants: 0, 
      isDirectFlight: false, 
      cabinClass: "economy",
    };
  }


  public async createCarRequestByPackageData(
    checkIn: string | null,
    checkOut: string | null,
    toCity: string | null,
  ): Promise<CarRentalRequest> {

    const carRentalDate = checkIn ? new Date(checkIn) : null;
    let threeDaysFromCheckIn;

    if (carRentalDate) {
      threeDaysFromCheckIn = new Date(carRentalDate); // Create a copy of carRentalDate
      threeDaysFromCheckIn.setDate(threeDaysFromCheckIn.getDate() + 3);
      console.log(threeDaysFromCheckIn);
    } else {
      console.log('Check-in date is not provided');
    }


    let toCityData = await carApi.getCarRentalCity(toCity);


    return {
      pickupStartDate: carRentalDate ? helpers.formatDateForPackageBuilder(new Date(carRentalDate)) : helpers.formatDateForPackageBuilder(new Date()),
      dropoffEndDate: carRentalDate ? helpers.formatDateForPackageBuilder(new Date(new Date(carRentalDate).setDate(new Date(carRentalDate).getDate() + 3))) // Chain setDate and new Date
        : helpers.formatDateForPackageBuilder(threeDaysFromCheckIn),
      pickupCity: toCityData ? toCityData[0].id : 'abc',
      dropoffCity: toCityData ? toCityData[0].id : 'abc',
      pickupTime: "10:00",
      dropoffTime: "10:00",
      driverAge: 25,
      carType: ["small"],
      hasHairConditioner: true
    };
  }


  public isHotelDataNull(hotelsData: HotelResponse[]) {
    return hotelsData.every(hotel => 
        hotel.hotelId === null && 
        hotel.city === null &&
        hotel.hotelName === null &&
        hotel.checkIn === null &&
        hotel.checkOut === null &&
        hotel.rooms === null &&
        hotel.adults === null &&
        hotel.children === null &&
        hotel.price === null &&
        hotel.rating === null &&
        hotel.photoUrl === null &&
        hotel.bookingUrl === null
    );
};

}




