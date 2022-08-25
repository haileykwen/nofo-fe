import { GrLogout } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cookiesClient } from "../../apis";
import { UrlRouter } from "../../router";

const SidebarLogout = () => {
    const SidebarSelector = useSelector((state: any) => state.sidebar);
    const Navigation = useNavigate();

    return (
        <div
            className={`
                    sidebar-item 
                    sidebar-logout
                    ${!SidebarSelector.reveal && "sm:justify-center"} 
                `}
            onClick={() => {
                cookiesClient().set('authToken', null, {
                    path: '/',
                    sameSite: 'lax'
                });
                Navigation(UrlRouter.AUTH_LOGIN)
            }}
        >
            <GrLogout />
            <p className={`sidebar-item-title ${SidebarSelector.reveal ? "block" : "sm:hidden"}`}>Log out</p>
        </div>
    );
};

export default SidebarLogout;