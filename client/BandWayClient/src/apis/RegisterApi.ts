import axios from 'axios';
import { RegisterInfo } from '../models/RegisterInfo';


export class RegisterApi {

    BASE_URL: string = "http://localhost:8080/bandway";


    public async register(registerInfo: RegisterInfo) {
        try {
            await axios.post(`${this.BASE_URL}/registerUser?firstName=${registerInfo.firstName}&lastName=${registerInfo.lastName}&email=${registerInfo.email}&password=${registerInfo.password}&phone=${registerInfo.phone}&username=${registerInfo.userName}`);

        } catch (error) {
            const responseData = error.response?.data;
            throw new Error(responseData);
        }
    }

}