import {
    REVEAL_SIDEBAR,
    UNREVEAL_SIDEBAR,
} from './SidebarTypes';

const initialState = {
    reveal: true,
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
        default: 
            return state;
    };
};

export default SidebarReducer;