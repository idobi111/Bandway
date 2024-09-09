import axios from 'axios';
import {PackageSearchOrderRequest} from "../models/PackageSearchOrderRequest";


export class PackageSearchApi {

    BASE_URL: string = "https://bandway-client-822235880699.us-central1.run.app/bandway";

    public async savePackageSearch(packageSearch: PackageSearchOrderRequest): Promise<void> {
        try {
            await axios.post<void>(`${this.BASE_URL}/savePackageSearchOrder`, packageSearch);
        } catch (error) {
            throw new Error('Error while store package search to db');
        }
    }
}