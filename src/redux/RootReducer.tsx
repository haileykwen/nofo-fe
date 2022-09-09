import { combineReducers } from 'redux';
import AdministratorReducer from './Administrator/AdministratorReducers';
import SidebarReducer from './Sidebar/SidebarReducers';
import datasourcesReducers from './datasource/dataSourceReducers';

const RootReducer = combineReducers({
    sidebar: SidebarReducer,
    administrator: AdministratorReducer,
    datasource: datasourcesReducers,
});

export default RootReducer;