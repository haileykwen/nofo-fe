import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

interface SidebarItemProps {
    indexOf: number
    icon: any
    title: string
    redirectTo: string
};

const SidebarItem = (props: SidebarItemProps) => {
    const Navigation = useNavigate();
    const Location = useLocation();
    const SidebarSelector = useSelector((state: any) => state.sidebar);

    return (
        <div
            key={props.indexOf}
            className={`
                sidebar-item 
                ${!SidebarSelector.reveal && "justify-center"} 
                ${Location.pathname === props.redirectTo && "bg-[#1BEBB9]"}
                ${props.indexOf === 0 && "mt-[84px]"}
            `}
            onClick={() => Navigation(props.redirectTo)}
        >
            {props.icon}
            <p className={`sidebar-item-title ${SidebarSelector.reveal ? "block" : "hidden"}`}>{props.title}</p>
        </div>
    );
};

export default SidebarItem;