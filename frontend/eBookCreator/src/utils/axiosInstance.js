import axios from 'axios';
import { BASE_URL } from './apiPaths';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 80000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accesToken = localStorage.getItem("token");
        if (accesToken) {
            config.headers["Authorization"] = `Bearer ${accesToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle commmon errors globally
        if (error.response) {
            if (error.response.status === 500) {
                console.error("Server error occurred. Please try again later.");
                }
            } else if (error.code === 'ECONNABORTED') {
                console.error("Request timed out. Please try again.");
            }
            return Promise.reject(error);
        }
    );

export default axiosInstance;