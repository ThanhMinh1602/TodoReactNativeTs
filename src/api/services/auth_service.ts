import axios from "axios";
import { BASE_URL } from "../baseUrl/baseUrl";
import { authEndpoint } from "../endpoints/auth";

export const sendOtp = async (email: string) => {
    try {
        const data = { "email": email };
        const response = await axios.post(
            `${BASE_URL}${authEndpoint.sentOtp}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ''`,
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error sending OTP:', error);
        throw error;
    }
}
