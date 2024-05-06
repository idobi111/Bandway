export interface CarRentalRequest {
    pickupStartDate: string;
    dropoffEndDate: string;
    pickupCity: string;
    dropoffCity: string;
    pickupTime: string;
    dropoffTime: string;
    driverAge: number;
    carType: string[];
    hasHairConditioner: boolean;
  }