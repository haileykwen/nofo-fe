import {
    REVEAL_SIDEBAR,
    UNREVEAL_SIDEBAR,

    REVEAL_MOBILE_SIDEBAR,
    UNREVEAL_MOBILE_SIDEBAR,
} from './SidebarTypes';

const initialState = {
    reveal: true,
    mobile: false,
};

const SidebarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case REVEAL_SIDEBAR:
            return {
                ...state,
                reveal: true,
            };
        case UNREVEAL_SIDEBAR:
            return {
                ...state,
                reveal: false,
            };
        case REVEAL_MOBILE_SIDEBAR:
            return {
                ...state,
                mobile: true,
            };
        case UNREVEAL_MOBILE_SIDEBAR:
            return {
                ...state,
                mobile: false,
            };
        default: 
            return state;
    };
};

export default SidebarReducer;