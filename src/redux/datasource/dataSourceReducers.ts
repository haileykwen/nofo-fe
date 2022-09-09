import {
    START_LOADING,
    STOP_LOADING,
    GET_DATASOURCES,
} from "./datasourceTypes";

const initialState = {
    loading: false,
    datasources: null,
};

const datasourcesReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true
            };
        case STOP_LOADING:
            return {
                ...state,
                loading: false
            };
        case GET_DATASOURCES:
            return {
                ...state,
                datasources: action.payload
            };
        default: 
            return state;
    };
};

export default datasourcesReducers;