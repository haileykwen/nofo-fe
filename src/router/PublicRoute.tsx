import {
    Navigate,
    Outlet,
} from "react-router-dom";

const PublicRoute = () => {
    // const auth = getToken();
    const auth = false;
    return !auth || auth === 'null' ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;