export interface CarRentalOrderRequest {
    userId: number;
    orderDate: Date;
    rentalStartDate: string;
    rentalEndDate: string;
    rentalStartLocation: string;
    rentalEndLocation: string;
}