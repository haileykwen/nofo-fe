import {
    START_LOADING,
    STOP_LOADING,
    GET_ADMINS,
} from "./AdministratorTypes";

const initialState = {
    loading: false,
    admins: null,
};

const AdministratorReducer = (state = initialState, action: any) => {
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
        case GET_ADMINS:
            return {
                ...state,
                admins: action.payload
            };
        default: 
            return state;
    };
};

export default AdministratorReducer;