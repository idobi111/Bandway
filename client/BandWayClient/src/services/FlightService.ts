import { RoundWayFlightData, RoundWayFlightSegment } from "../models/FlightRoundWayResponse";
import { Package } from "../models/Package";
import FlightIcon from '@mui/icons-material/Flight';



export class FlightService {

    // public isConnectionFlight(servicePackage: Package): boolean {
    //     let departFlightAmount: number | undefined = servicePackage.flight?.departFlightDetails[0].flightDetails.length;
    //     if (departFlightAmount != undefined && departFlightAmount > 1) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

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

    public getRoundWayFlightPrice(outboundRoundWayFlightSegment: RoundWayFlightSegment, returnRoundWayFlightSegment: RoundWayFlightSegment) {

        const outboundPrice = outboundRoundWayFlightSegment.price;
        const returnPrice = returnRoundWayFlightSegment.price;
        return outboundPrice + returnPrice;

    }

    public getTotalPriceOfRoundWay(roundWay: RoundWayFlightData): number {
        let totalPrice = 0;
        roundWay.departFlightDetails.forEach(departFlight => {
            roundWay.arriveFlightDetails.forEach(arriveFlight => {
                totalPrice += this.getRoundWayFlightPrice(departFlight, arriveFlight);
            });
        });
        return totalPrice;
    }

    public sortFlightsFromLowestToHighestPrice(roundWayFlightDetails: RoundWayFlightData[]): RoundWayFlightData[] {
        return roundWayFlightDetails.sort((a, b) => {
            const totalPriceA = this.getTotalPriceOfRoundWay(a);
            const totalPriceB = this.getTotalPriceOfRoundWay(b);
            return totalPriceA - totalPriceB;
        });
    }




}




