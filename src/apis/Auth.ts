import { notify } from "../App";
import { http, ApiUrl, cookiesClient } from ".";

export const API_SIGNIN = (data: any, callbackSuccess: any, callbackError: any) => {
    notify("loading", "Logging in");
    http().post(`${ApiUrl.AUTH_LOGIN}`, data).then((resp: any) => {
        if (resp?.error === false) {
            notify("remove", "");
            callbackSuccess && callbackSuccess(resp);
            cookiesClient().set('authToken', resp.data.token, {
                path: '/',
                sameSite: 'lax',
                maxAge: 31536000 
            });
        } else {
            notify("remove", "");
            callbackError && callbackError(resp);
        };
    });
};