import {
    Navigate,
    Outlet,
} from "react-router-dom";
import { getToken } from "../apis";
import UrlRouter from "./UrlRouter";

const PrivateRoute = () => {
    const auth = getToken();
    return auth && auth !== 'null' ? <Outlet /> : <Navigate to={UrlRouter.AUTH_LOGIN} />;
};

export default PrivateRoute