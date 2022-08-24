import { useDispatch, useSelector } from 'react-redux';
import SidebarItem from './SidebarItem';
import "./Sidebar.css";
import SidebarToggle from './SidebarToggle';
import { UrlRouter } from '../../router';
import { AiOutlineBarChart, AiOutlineDatabase, AiOutlineApi } from 'react-icons/ai';
import { GrGroup, GrUserAdmin, GrClose } from 'react-icons/gr';
import { UnrevealMobileSidebar } from '../../redux/Sidebar/SidebarActions';
import SidebarLogout from './SidebarLogout';

const Sidebar = () => {
    const SidebarSelector = useSelector((state: any) => state.sidebar);
    const Dispatch = useDispatch();

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
        {
            text: "Administrator",
            redirectTo: UrlRouter.APP_ADMINISTRATOR,
            icon: <GrUserAdmin />,
        },
    ];

    return (
        <div 
            className={`
                absolute left-[-1000%] 
                ${SidebarSelector.mobile ? "left-0" : ""}
                sidebar 
                ${SidebarSelector.reveal ? "w-[200px]" : "w-[50px]"}
            `}
        >
            <SidebarToggle />
            <GrClose className="sidebar-close-mobile" onClick={() => Dispatch(UnrevealMobileSidebar())} />

            {sidebarItem.map((item: any, index: number) => {
                return (
                    <SidebarItem 
                        key={index}
                        indexOf={index}
                        icon={item.icon}
                        title={item.text}
                        redirectTo={item.redirectTo}
                    />
                );
            })}

            <SidebarLogout />
        </div>
    );
};

export default Sidebar;