import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { RevealSidebar, UnrevealSidebar } from "../../redux/Sidebar/SidebarActions";

const SidebarToggle = () => {
    const Dispatch = useDispatch();
    const SidebarSelector = useSelector((state: any) => state.sidebar);

    return (
        <div 
            className='sidebar-toggle'
            onClick={() => {
                SidebarSelector.reveal ? Dispatch(UnrevealSidebar()) : Dispatch(RevealSidebar());
            }}
        >
            <FontAwesomeIcon
                size='xs' 
                icon={faChevronLeft} 
                color="#121A24" 
                className={`m-auto ${SidebarSelector.reveal ? "" : "rotate-180"} duration-500`} 
            />
        </div>
    );
};

export default SidebarToggle;