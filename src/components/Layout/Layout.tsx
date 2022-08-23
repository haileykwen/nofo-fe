import { ReactNode } from "react";
import "./Layout.css";

interface LayoutProps {
    children: ReactNode
};

const Layout = (props: LayoutProps) => {
    return (
        <div className="layout">
            {props.children}
        </div>
    );
};

export default Layout;