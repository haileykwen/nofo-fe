import {
    Navigate,
    Outlet,
} from "react-router-dom";
import { getToken } from "../apis";
import UrlRouter from "./UrlRouter";

const PublicRoute = () => {
    const auth: any = getToken();
    return !auth || auth === 'null' ? <Outlet /> : <Navigate to={UrlRouter.APP_DASHBOARD} />;
};

export default PublicRoute;