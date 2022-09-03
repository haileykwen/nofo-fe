import { API_GET_ADMINS } from "../../apis/administrator";
import {
    GET_ADMINS,
    START_LOADING,
    STOP_LOADING,
} from "./AdministratorTypes";

export const StartLoading = () => {
    return {
        type: START_LOADING,
    };
};

export const StopLoading = () => {
    return {
        type: STOP_LOADING,
    };
};

export const GetAdmins = async () => {
    let admins: any;
    await API_GET_ADMINS(
        null,
        (resp: any) => {
            admins = resp;
        },
        (error: any) => {
            admins = error;
        }
    );
    return {
        type: GET_ADMINS,
        payload: admins.data
    };
}