import axios from 'axios';


export class SubscribeApi {

    BASE_URL: string = "https://bandway-server-822235880699.us-west1.run.app/bandway";


    public async subscribe(userMail: string) {
        try {
            await axios.post(`${this.BASE_URL}/subscribeMail?userMail=${userMail}`);

        } catch (error) {
            throw new Error('Error subscribe mail');
        }
    }

    public async unsubscribe(userMail: string) {
        try {
            await axios.post(`${this.BASE_URL}/unsubscribeMail?userMail=${userMail}`);

        } catch (error) {
            throw new Error('Error unsubscribe mail');
        }
    }
}