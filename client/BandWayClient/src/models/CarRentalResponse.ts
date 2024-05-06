export interface CarRentalResponse {
  model: string;
  pricePerDay: number;
  dropOffAddress: string;
  dropOffPlaceName: string;
  pickUpAddress: string;
  pickUpPlaceName: string;
  image: string;
  carLink: string;
  totalPrice: number;
  rentalPeriod: number;
  rating: number;
  ratingDescription: string;
  supplierName: string;
  supplierLogo: string;
  seats: number;
  carGroup: string;
  transmission: string;
}
