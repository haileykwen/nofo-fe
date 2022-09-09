import { Dispatch } from "redux";
import { API_CREATE_DATASOURCES, API_GET_DATASOURCES } from "../../apis/datasources";
import { notify } from "../../App";
import {
    GET_DATASOURCES,
    START_LOADING,
    STOP_LOADING,
} from "./datasourceTypes";

export function GetDatasources() {
    return async (dispatch: Dispatch<any>) => {
        dispatch({
            type: START_LOADING,
        });

        let datasources: any;
        await API_GET_DATASOURCES(
            null,
            (resp: any) => {
                datasources = resp;
            },
            (error: any) => {
                datasources = error;
            }
        );
        
        dispatch({
            type: GET_DATASOURCES,
            payload: datasources.data
        });

        dispatch({
            type: STOP_LOADING,
        });
    };
};

export function CreateDatasources(data: any) {
    return async (dispatch: Dispatch<any>) => {
        await API_CREATE_DATASOURCES(
            data,
            (resp: any) => {
                notify("success", resp.message);
            },
            (error: any) => {
                notify("error", error.message);
            }
        );

        dispatch({
            type: START_LOADING,
        });

        let datasources: any;
        await API_GET_DATASOURCES(
            null,
            (resp: any) => {
                datasources = resp;
            },
            (error: any) => {
                datasources = error;
            }
        );
        
        dispatch({
            type: GET_DATASOURCES,
            payload: datasources.data
        });

        dispatch({
            type: STOP_LOADING,
        });
    };
};