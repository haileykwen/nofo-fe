import {
    REVEAL_SIDEBAR,
    UNREVEAL_SIDEBAR,

    REVEAL_MOBILE_SIDEBAR,
    UNREVEAL_MOBILE_SIDEBAR,
} from './SidebarTypes';

export const RevealSidebar = () => {
    return {
        type: REVEAL_SIDEBAR,
    };
};

export const UnrevealSidebar = () => {
    return {
        type: UNREVEAL_SIDEBAR,
    };
};

export const RevealMobileSidebar = () => {
    return {
        type: REVEAL_MOBILE_SIDEBAR,
    };
};

export const UnrevealMobileSidebar = () => {
    return {
        type: UNREVEAL_MOBILE_SIDEBAR,
    };
};