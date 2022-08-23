import { Fragment } from "react";
import { Router } from "./router";
import toast, { Toaster } from 'react-hot-toast';

export const notify = (type: "success" | "error" | "loading" | "remove", message: string) => {
    type === "success" && toast.success(message);
    type === "error" && toast.error(message);
    type === "loading" && toast.loading(message);
    type === "remove" && toast.remove();
};

const App = () => {
    return (
        <Fragment>
            <Router />
            <Toaster />
        </Fragment>
    );
};

export default App;