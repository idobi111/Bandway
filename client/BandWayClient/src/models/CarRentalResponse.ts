interface CarRentalData {
    model: string;
    pricePerDay: number;
    dropOffAddress: string | null;
    dropOffPlaceName: string | null;
    pickUpAddress: string | null;
    pickUpPlaceName: string | null;
    image: string;
    dealInfo: DealInfo[];
    rentalPeriod: number;
    rating: number;
    ratingDescription: string | null;
    seats: number | null;
    carGroup: string | null;
    transmission: string | null;
    fuelType: string | null;
}

interface DealInfo {
    carLinks: string;
    supplierLogos: string;
    supplierNames: string;
    price: number;
}


export interface CarRentalResponse {
  carRentalData: CarRentalData[];
  minPrice: number;
  checkIn: string;
  checkOut: string;
}