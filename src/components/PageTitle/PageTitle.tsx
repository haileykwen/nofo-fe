import { useLocation } from "react-router-dom";

const PageTitle = () => {
    const Location = useLocation();

    return (
        <h1 className="text-[18px] text-[#121A24] font-medium">
            {Location.pathname.includes("dashboard") && "Dashboard"}
            {Location.pathname.includes("data-sources") && "Data Sources"}
            {Location.pathname.includes("apis") && "APIs"}
            {Location.pathname.includes("web-builder") && "Web Builder"}
            {Location.pathname.includes("meet") && "Meet Up"}
            {Location.pathname.includes("login") && "Log in"}
        </h1>
    );
};

export default PageTitle;