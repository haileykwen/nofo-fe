import { Dispatch } from "redux";
import { API_GET_ADMINS } from "../../apis/administrator";
import {
    GET_ADMINS,
    START_LOADING,
    STOP_LOADING,
} from "./AdministratorTypes";

export const GetAdmins = () => {
    return async (dispatch: Dispatch<any>) => {
        dispatch({
            type: START_LOADING,
        });

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
        dispatch({
            type: GET_ADMINS,
            payload: admins.data
        });

        dispatch({
            type: STOP_LOADING,
        });
    }
}