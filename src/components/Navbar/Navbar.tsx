import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RevealMobileSidebar, UnrevealMobileSidebar } from "../../redux/Sidebar/SidebarActions";

const Navbar = () => {
    const Dispatch = useDispatch();
    const SidebarSelector = useSelector((state: any) => state.sidebar);

    return (
        <header 
            className="sticky flex items-center h-[53px] border-y-[1px] border-[#C8D1DC] w-full box-border p-[20px]"
            onClick={() => {
                SidebarSelector.mobile ? Dispatch(UnrevealMobileSidebar()) : Dispatch(RevealMobileSidebar());
            }}
        >
            <AiOutlineMenuUnfold size="30px" className="block sm:hidden" />
        </header>
    );
};

export default Navbar;