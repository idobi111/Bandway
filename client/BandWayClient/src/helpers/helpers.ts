import { Package } from "../models/Package";

export class Helpers {

    public replaceSpacesWithUnderscores(inputString: string): string {
        return inputString.replace(/\s+/g, '_');
    }

    public calculateNumberOfNights(checkIn: string, checkOut: string): number {
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);

        // Calculate the difference in milliseconds between the two dates
        const timeDifference = checkOutDate.getTime() - checkInDate.getTime();

        // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
        const numberOfNights = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));

        return numberOfNights;

    }

    public formatDate(dateString: string): string {
        const date = new Date(dateString);
        const day = date.getDate();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const monthName = monthNames[date.getMonth()];

        return `${day} ${monthName}`;
    }

    public formatDatesRange(servicesPackage: Package): string {
        const checkInDate = new Date(servicesPackage.hotel.checkIn);
        const checkOutDate = new Date(servicesPackage.hotel.checkOut);

        const checkInDay = checkInDate.getDate();
        const checkInMonth = checkInDate.getMonth() + 1; // Adding 1 because getMonth returns zero-based index
        const checkInYear = checkInDate.getFullYear();

        const checkOutDay = checkOutDate.getDate();
        const checkOutMonth = checkOutDate.getMonth() + 1; // Adding 1 because getMonth returns zero-based index
        const checkOutYear = checkOutDate.getFullYear();

        // Format check-in date as "MM/DD/YY"
        const formattedCheckInDate = `${checkInMonth}/${checkInDay}/${checkInYear.toString().slice(-2)}`;

        // Format check-out date as "MM/DD/YY"
        const formattedCheckOutDate = `${checkOutMonth}/${checkOutDay}/${checkOutYear.toString().slice(-2)}`;

        return `${formattedCheckInDate} - ${formattedCheckOutDate}`;
    }


}

