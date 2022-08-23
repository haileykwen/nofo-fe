import {
    REVEAL_SIDEBAR,
    UNREVEAL_SIDEBAR,
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