import { CarRentalResponse } from "../models/CarRentalResponse";
import { FlightOneWayResponse } from "../models/FlightOneWayResponse";
import { HotelResponse } from "../models/HotelResponse";
import { Package } from "../models/Package";

export class PackageBuilderService {

    public combineResults(hotels: HotelResponse[], flights?: FlightOneWayResponse[], carRentals?: CarRentalResponse[]): Package[] {
        const packages: Package[] = [];
      
        hotels.forEach((hotel, index) => {
          const packageId = index + 1; // Generate unique package ID
          const packageObj: Package = { packageId, hotel};

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

      public getPackagePrice(servicePackage: Package): number {
        let totalPrice = 0;
    
        // Add hotel price
        totalPrice += servicePackage.hotel.price;
    
        // Add flight price
        if (servicePackage.flight) {
            const departFlightPrice = servicePackage.flight.departFlightDetails.reduce((acc, flight) => acc + flight.price, 0);
            totalPrice += departFlightPrice;
        }
    
        // Add car rental price
        if (servicePackage.carRental) {
            totalPrice += servicePackage.carRental.price;
        }
    
        return totalPrice;
      }
}




