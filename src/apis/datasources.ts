import { notify } from "../App";
import { http, ApiUrl } from "./";

export const API_GET_DATASOURCES = async (data: any, callbackSuccess: any, callbackError: any) => {
    await http(true).get(`${ApiUrl.DATA_SOURCE_GET_ALL}`, data).then((resp: any) => {
        if (resp?.error === false) {
            callbackSuccess && callbackSuccess(resp);
        } else {
            notify("error", resp.message);
            callbackError && callbackError(resp);
        };
    });
};

export const API_CREATE_DATASOURCES = async (data: any, callbackSuccess: any, callbackError: any) => {
    notify("loading", "Creating datasources");
    await http(true).post(`${ApiUrl.DATA_SOURCE_CREATE}`, data).then((resp: any) => {
        if (resp?.error === false) {
            notify("remove", "");
            callbackSuccess && callbackSuccess(resp);
        } else {
            notify("remove", "");
            callbackError && callbackError(resp);
        };
    });
};