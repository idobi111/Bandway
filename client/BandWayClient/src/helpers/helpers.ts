import { Package } from "../models/Package";

export class Helpers {

    public replaceSpacesWithUnderscores(inputString: string): string {
        return inputString.replace(/\s+/g, '_');
    }

    public calculateNumberOfNights(checkIn: string | undefined, checkOut: string | undefined): number {
        const checkInDate = new Date(checkIn || '');
        const checkOutDate = new Date(checkOut || '');

        // Calculate the difference in milliseconds between the two dates
        const timeDifference = checkOutDate.getTime() - checkInDate.getTime();

        // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
        const numberOfNights = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));

        return numberOfNights;

    }

    public formatDate(dateString: string | undefined): string | undefined {
        if (dateString) {
            const date = new Date(dateString);
            const day = date.getDate();
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            const monthName = monthNames[date.getMonth()];

            return `${day} ${monthName}`;
        }
    }

    public formatDateAndYear(dateString: string | undefined): string | undefined {
        if (dateString) {
            const date = new Date(dateString);
            const day = date.getDate();
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            const monthName = monthNames[date.getMonth()];
            const year = date.getFullYear();


            return `${day} ${monthName}, ${year}`;
        }
    }

    public formatDatesRange(servicesPackage: Package): string {
        const checkInDate = new Date(servicesPackage.hotel?.checkIn || '');
        const checkOutDate = new Date(servicesPackage.hotel?.checkOut || '');

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


    public formatHour(hour: string | undefined) {
        if (hour) {
            return new Date(hour).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        }
    }

    public formatDateString(dateStr: string | null): string {
        if (dateStr != null) {
            try {
                console.log(dateStr);

                const [month, day, year] = dateStr.split('/').map(Number);

                const date = new Date(year, month - 1, day);

                if (isNaN(date.getTime())) {
                    throw new Error('Invalid date');
                }

                console.log(date);

                const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

                return formattedDate;
            } catch (error) {
                throw new Error('Invalid date format. Expected format: M/d/yyyy');
            }
        }
        return '';
    }



    public formatDateForPackageBuilder(date: Date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Pad month with leading zero
        const day = String(date.getDate()).padStart(2, '0'); // Pad day with leading zero
        const hours = String(date.getHours()).padStart(2, '0'); // Pad hours with leading zero
        const minutes = String(date.getMinutes()).padStart(2, '0'); // Pad minutes with leading zero
        const seconds = String(date.getSeconds()).padStart(2, '0'); // Pad seconds with leading zero
        const milliseconds = String(date.getMilliseconds()).padStart(3, '0'); // Pad milliseconds with leading zeros
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
    };

    public getRoundedPrice(price: number) {
        return Math.round(price);
    }

    public removeValueInBrackets(input: string): string {
        const regex = /\(([^)]+)\)/;
        return input.replace(regex, '').trim();
    }

    public formatPrice(price: number): string {
        const formattedPrice = price.toFixed(2);

        if (formattedPrice.endsWith('.00')) {
            return parseInt(price.toString()).toString();
        } else {
            return formattedPrice;
        }
    }

    public deleteSpaces(input: string): string {
        return input.replace(" ", "");
    }

}

