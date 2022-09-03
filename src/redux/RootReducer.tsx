import { combineReducers } from 'redux';
import AdministratorReducer from './Administrator/AdministratorReducers';
import SidebarReducer from './Sidebar/SidebarReducers';

const RootReducer = combineReducers({
    sidebar: SidebarReducer,
    administrator: AdministratorReducer,
});

export default RootReducer;