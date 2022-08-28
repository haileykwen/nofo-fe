import { notify } from "../App";
import { http, ApiUrl } from "./";

export const API_SEND_INVITATION = (data: any, callbackSuccess: any, callbackError: any) => {
    notify("loading", "Sending invitaion");
    http(true).post(`${ApiUrl.ADMINISTRATOR_SEND_INVITATION}`, data).then((resp: any) => {
        if (resp?.error === false) {
            notify("remove", "");
            callbackSuccess && callbackSuccess(resp);
        } else {
            notify("remove", "");
            callbackError && callbackError(resp);
        };
    });
};

export const API_ACCEPT_INVITATION = (data: any, callbackSuccess: any, callbackError: any) => {
    notify("loading", "Accepting invitaion");
    http().post(`${ApiUrl.ADMINISTRATOR_ACCEPT_INVITATION}`, data).then((resp: any) => {
        if (resp?.error === false) {
            notify("remove", "");
            callbackSuccess && callbackSuccess(resp);
        } else {
            notify("remove", "");
            callbackError && callbackError(resp);
        };
    });
};