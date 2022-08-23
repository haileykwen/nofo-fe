import axios from 'axios';
import Cookies from 'universal-cookie/es6';

function http(withAuthorization = false) {
    const url = process.env.REACT_APP_API_BASE_URL;
    const token: string = cookiesClient().get('authToken')
    const options: any = {
        baseURL: url,
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 50000,
    };

    if (withAuthorization) {
        options.headers = {
            ...options.headers,
            "Authorization": `${token}`,
        };
    };

    const client = axios.create(options)
    client.interceptors.request.use(
        requestConfig => requestConfig,
        requestError => {
            return requestError;
        },
    );

    client.interceptors.response.use(
        response => {
            return response.data;
        },
        error => {
            return error.response.data;
        },
    );

    return client;
};

function cookiesClient() {
    const cksApp = new Cookies();
    return cksApp;
};

function getToken() {
    return cookiesClient().get('authToken') || null;
};

export {
    http,
    cookiesClient,
    getToken,
};