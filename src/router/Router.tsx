import { Flex } from "@chakra-ui/react";
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
        <Flex>
            <Sidebar />
            <Flex 
                direction="column"
                w="100vw"
                className={`duration-300`}
                marginLeft={{ base: "0px", lg: SidebarSelector.reveal ? "200px" : "50px" }}
            >
                <Navbar />
                <Outlet />
            </Flex>
        </Flex>
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