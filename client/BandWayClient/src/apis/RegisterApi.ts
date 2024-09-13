import axios from 'axios';
import { RegisterInfo } from '../models/RegisterInfo';
import { LoginInfo } from '../models/LoginInfo';
import {HotelLinkResponse} from "../models/HotelLinkResponse";
import {LoginResponse} from "../models/LoginResponse";


export class RegisterApi {

    BASE_URL: string = "https://bandway-server-822235880699.us-west1.run.app/bandway";


    public async register(registerInfo: RegisterInfo) {
        try {
            await axios.post(`${this.BASE_URL}/registerUser?firstName=${registerInfo.firstName}&lastName=${registerInfo.lastName}&email=${registerInfo.email}&password=${registerInfo.password}&phone=${registerInfo.phone}&username=${registerInfo.userName}`);

        } catch (error) {
            const responseData = error.response?.data;
            throw new Error(responseData);
        }
    }

    public async login(loginInfo: LoginInfo) :  Promise<LoginResponse> {
        try {
            const response = await axios.post(`${this.BASE_URL}/login?username=${loginInfo.email}&password=${loginInfo.password}`);
            return response.data;
        } catch (error) {
            const responseData = error.response?.data;
            throw new Error(responseData);
        }
    }

}