import { useSelector } from 'react-redux';
import SidebarItem from './SidebarItem';
import "./Sidebar.css";
import SidebarToggle from './SidebarToggle';
import { UrlRouter } from '../../router';
import { AiOutlineBarChart, AiOutlineDatabase, AiOutlineApi } from 'react-icons/ai';
import { GrGroup } from 'react-icons/gr';

const Sidebar = () => {
    const SidebarSelector = useSelector((state: any) => state.sidebar);

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
        </div>
    );
};

export default Sidebar;