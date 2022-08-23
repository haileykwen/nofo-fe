import { combineReducers } from 'redux';
import SidebarReducer from './Sidebar/SidebarReducers';

const RootReducer = combineReducers({
    sidebar: SidebarReducer
});

export default RootReducer;