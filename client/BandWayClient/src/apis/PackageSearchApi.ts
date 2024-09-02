import axios from 'axios';
import {PackageSearchOrderRequest} from "../models/PackageSearchOrderRequest";


export class PackageSearchApi {

    BASE_URL: string = "http://localhost:8080/bandway";

    public async savePackageSearch(packageSearch: PackageSearchOrderRequest): Promise<void> {
        try {
            await axios.post<void>(`${this.BASE_URL}/savePackageSearchOrder`, packageSearch);
        } catch (error) {
            throw new Error('Error while store package search to db');
        }
    }
}