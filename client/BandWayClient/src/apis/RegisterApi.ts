import axios from 'axios';
import { RegisterInfo } from '../models/RegisterInfo';
import { LoginInfo } from '../models/LoginInfo';


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

    public async login(loginInfo: LoginInfo) {
        try {
            const response = await axios.post(`${this.BASE_URL}/login?username=${loginInfo.email}&password=${loginInfo.password}`);
            return response.data;
        } catch (error) {
            const responseData = error.response?.data;
            throw new Error(responseData);
        }
    }

}