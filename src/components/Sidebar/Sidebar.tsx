import { useSelector } from 'react-redux';
import SidebarItem from './SidebarItem';
import "./Sidebar.css";
import SidebarToggle from './SidebarToggle';
import { UrlRouter } from '../../router';
import { AiOutlineBarChart, AiOutlineDatabase, AiOutlineApi } from 'react-icons/ai';
import { GrGroup, GrLogout } from 'react-icons/gr';
import { cookiesClient } from '../../apis';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const SidebarSelector = useSelector((state: any) => state.sidebar);
    const Navigation = useNavigate();

    const sidebarItem = [
        {
            text: "Dashboard",
            redirectTo: UrlRouter.APP_DASHBOARD,
            icon: <AiOutlineBarChart />,
        },
        {
            text: "Data Sources",
            redirectTo: UrlRouter.APP_DATA_SOURCES,
            icon: <AiOutlineDatabase />,
        },
        {
            text: "APIs",
            redirectTo: UrlRouter.APP_APIS,
            icon: <AiOutlineApi />,
        },
        {
            text: "Meet Up",
            redirectTo: UrlRouter.APP_MEET_UP,
            icon: <GrGroup />,
        },
    ];

    return (
        <div className={`sidebar ${SidebarSelector.reveal ? "w-[200px]" : "w-[50px]"}`}>
            <SidebarToggle />

            {sidebarItem.map((item: any, index: number) => {
                return (
                    <SidebarItem 
                        key={index}
                        indexOf={index}
                        icon={item.icon}
                        title={item.text}
                        redirectTo={item.redirectTo}
                    />
                )
            })}

            <div
                className={`
                    sidebar-item 
                    sidebar-logout
                    ${!SidebarSelector.reveal && "justify-center"} 
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
                <p className={`sidebar-item-title ${SidebarSelector.reveal ? "block" : "hidden"}`}>Log out</p>
            </div>
        </div>
    );
};

export default Sidebar;