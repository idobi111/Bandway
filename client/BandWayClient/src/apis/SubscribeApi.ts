import axios from 'axios';


export class SubscribeApi {

    BASE_URL: string = "http://localhost:8080/bandway";


    public async subscribe(userMail: string) {
        try {
            const response = await axios.post(`${this.BASE_URL}/subscribeMail?userMail=${userMail}`);

        } catch (error) {
            throw new Error('Error subscribe mail');
        }
    }

    public async unsubscribe(userMail: string) {
        try {
            const response = await axios.post(`${this.BASE_URL}/unsubscribeMail?userMail=${userMail}`);

        } catch (error) {
            throw new Error('Error unsubscribe mail');
        }
    }
}