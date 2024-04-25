import { Package } from "../models/Package";
import FlightIcon from '@mui/icons-material/Flight';



export class FlightService {

    public isConnectionFlight(servicePackage: Package): boolean {
        let departFlightAmount: number | undefined = servicePackage.flight?.departFlightDetails[0].flightDetails.length;
        if (departFlightAmount != undefined && departFlightAmount > 1) {
            return true;
        }
        else {
            return false;
        }
    }

    public getFlightType(servicePackage: Package): string | null {
        let departFlightAmount: number | undefined = servicePackage.flight?.departFlightDetails[0].flightDetails.length;
        if (departFlightAmount != undefined && departFlightAmount > 1) {
            return "Connection Flight"
        }
        else if (departFlightAmount != undefined) {
            return "Direct Flight"
        }
        return null;
    }

    public getFlightHours(servicePackage: Package): string {
        let departureAirport: string | undefined;
        let departureTime: string | undefined;
        let arrivalAirport: string | undefined;
        let arrivalTime: string | undefined;
        let duration: string | undefined;

        const departFlightDetails = servicePackage.flight?.departFlightDetails;
        if (departFlightDetails && departFlightDetails.length > 0) {
            const firstDepartureFlight = departFlightDetails[0].flightDetails[0];
            const lastDepartureFlight = departFlightDetails[0].flightDetails[departFlightDetails[0].flightDetails.length - 1];

            departureAirport = firstDepartureFlight.departureAirport;
            departureTime = firstDepartureFlight.departureTime;
            arrivalAirport = lastDepartureFlight.arrivalAirport;
            arrivalTime = lastDepartureFlight.arrivalTime;
            duration = departFlightDetails[0].duration;
        }

        if (departureAirport && departureTime && arrivalAirport && arrivalTime && duration) {
            const formattedDepartureTime = new Date(departureTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
            const formattedArrivalTime = new Date(arrivalTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

            return `${formattedDepartureTime} (${departureAirport}) - ${formattedArrivalTime} (${arrivalAirport}), ${duration}`;
        }

        return '';
    }


}




