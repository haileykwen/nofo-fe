import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../../App";
import { Button, Layout, PageTitle, TextInput } from "../../components";
import { UrlRouter } from "../../router";
import "./Login.css";

const Login = () => {
    const [loginCredentials, setLoginCredentials] = useState({
       email: "",
       password: "", 
    });
    const Navigation = useNavigate();

    const handleChange = (event: any) => {
        const key: string = event.target.name;
        const value: string = event.target.value;
        let tempLoginCredentials: any = loginCredentials;
        tempLoginCredentials[key] = value;
        setLoginCredentials(tempLoginCredentials);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.table(loginCredentials);
        notify("success", "Log in successful");
        Navigation(UrlRouter.APP_DASHBOARD, {replace: true});
    };

    return (
        <Layout>
            <form className="login-form" onSubmit={handleSubmit}>
                <PageTitle />
                
                <TextInput
                    id="email"
                    name="email"
                    onChange={handleChange}
                    label="Email Address"
                />

                <TextInput
                    id="password"
                    name="password"
                    onChange={handleChange}
                    label="Password"
                />

                <Button label="Log in" onClick={handleSubmit} />
            </form>
        </Layout>
    );
};

export default Login;