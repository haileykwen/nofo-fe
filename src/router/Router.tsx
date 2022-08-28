import { useSelector } from "react-redux";
import {
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import { Navbar, Sidebar } from "../components";
import { AcceptInvitation, Administrator, APIs, Dashboard, DataSources, Login, MeetUp } from "../pages";
import { PublicRoute, UrlRouter, PrivateRoute } from "./";

const Router = () => {
    return (
        <Routes>
            {/* App Routes */}
            <Route path="/app" element={<PrivateRoute />}>
                <Route path={UrlRouter.APP} element={<App />}>
                    <Route path={UrlRouter.APP_DASHBOARD_RRD} element={<Dashboard />} />
                    <Route path={UrlRouter.APP_DATA_SOURCES_RRD} element={<DataSources />} />
                    <Route path={UrlRouter.APP_APIS_RRD} element={<APIs />} />
                    <Route path={UrlRouter.APP_MEET_UP_RRD} element={<MeetUp />} />
                    <Route path={UrlRouter.APP_ADMINISTRATOR} element={<Administrator />} />
                </Route>
            </Route>

            {/* Auth Routes */}
            <Route path="/auth" element={<PublicRoute />}>
                <Route path={UrlRouter.AUTH} element={<Auth />}>
                    <Route path={UrlRouter.AUTH_LOGIN} element={<Login />} />
                    <Route path={UrlRouter.AUTH_ACCEPT_INVITATION} element={<AcceptInvitation />} />
                </Route>
            </Route>
        </Routes>
    );
};

const App = () => {
    const SidebarSelector = useSelector((state: any) => state.sidebar);

    return (
        <main className="flex">
            <Sidebar />
            <div className={`app flex flex-col w-full ${SidebarSelector.reveal ? "ml-[200px]" : "ml-[50px]"} duration-300`}>
                <Navbar />
                <Outlet />
            </div>
        </main>
    );
};

const Auth = () => {
    return (
        <main className="flex flex-col">
            <Outlet />
        </main>
    );
};

export {
    Router,
};