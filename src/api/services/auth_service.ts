import axios, { AxiosError } from "axios";
import { BASE_URL } from "../baseUrl/baseUrl";
import { authEndpoint } from "../endpoints/auth";
import { RegisterModel } from "../../model/register_model";
const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ''`,
    }
}
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

export const register = async (registerModel: RegisterModel) => {
    try {
        const data = registerModel.toJson();
        const response = await axios.post(`${BASE_URL}${authEndpoint.register}`, data, config);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            return axiosError.response?.data;
        }
    }
}
export const login = async (email: string, password: string) => {
    try {
        const data = {
            "email": email,
            "password": password
        }
        const response = await axios.post(`${BASE_URL}${authEndpoint.login}`, data, config)
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            return axiosError.response?.data;
        }
    }
}

