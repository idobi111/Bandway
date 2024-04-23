
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
        const parts: string[] = dateString.split("-");
        const year: string = parts[0].slice(-2);
        const month: string = parts[1];
        const day: string = parts[2];
    
        return `${month}/${day}/${year}`;
    }
}

