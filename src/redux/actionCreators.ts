import * as SidebarCreators from "./Sidebar/SidebarActions";
import * as AdministratorCreators from "./Administrator/AdministratorActions";

export default {
    ...SidebarCreators,
    ...AdministratorCreators,
};