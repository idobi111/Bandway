import { RoundWayFlightData, RoundWayFlightSegment } from "../models/FlightRoundWayResponse";
import { Package } from "../models/Package";
import FlightIcon from '@mui/icons-material/Flight';



export class FlightService {

    public getFlightType(roundWayFlightSegment: RoundWayFlightSegment): string | null {
        let departFlightAmount: number | undefined = roundWayFlightSegment.stopCount;
        if (departFlightAmount != undefined && departFlightAmount > 0) {
            return "Connection Flight"
        }
        else if (departFlightAmount != undefined) {
            return "Direct Flight"
        }
        return null;
    }

    public getFlightDuration(duration: string): string {

        const [hoursStr, minutesStr] = duration?.split(':');

        const hours = parseInt(hoursStr);
        const minutes = parseInt(minutesStr);

        let formattedDuration = '';
        if (hours > 0) {
            formattedDuration += `${hours}hr `;
        }
        if (minutes > 0) {
            formattedDuration += `${minutes}m`;
        }

        return formattedDuration.trim();

    }

    public getFlightData(roundWayFlightSegment: RoundWayFlightSegment): string {
        let departureAirport: string | undefined;
        let departureTime: string | undefined;
        let arrivalAirport: string | undefined;
        let arrivalTime: string | undefined;
        let duration: string | undefined;

        const flightDetails = roundWayFlightSegment.flightDetails;
        if (flightDetails && flightDetails.length > 0) {
            const firstFlight = flightDetails[0];
            const lastFlight = flightDetails[flightDetails.length - 1];

            departureAirport = firstFlight.departureAirport;
            departureTime = firstFlight.departureTime;
            arrivalAirport = lastFlight.arrivalAirport;
            arrivalTime = lastFlight.arrivalTime;
        }


        if (departureAirport && departureTime && arrivalAirport && arrivalTime) {
            const formattedDepartureTime = new Date(departureTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
            const formattedArrivalTime = new Date(arrivalTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

            return `${formattedDepartureTime} (${departureAirport}) - ${formattedArrivalTime} (${arrivalAirport})`;
        }

        return '';
    }

    public getRoundWayFlightPrice(outboundRoundWayFlightSegment: RoundWayFlightSegment) {
        return outboundRoundWayFlightSegment.price;
    }

    public sortFlightsFromLowestToHighestPrice(roundWayFlightDetails: RoundWayFlightData[]): RoundWayFlightData[] {
        return roundWayFlightDetails.sort((a, b) => {
            const totalPriceA = this.getRoundWayFlightPrice(a.departFlightDetails[0]);
            const totalPriceB = this.getRoundWayFlightPrice(b.departFlightDetails[0]);
            return totalPriceA - totalPriceB;
        });
    }




}




