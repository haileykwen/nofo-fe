import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_SIGNIN } from "../../apis";
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
        API_SIGNIN(
            loginCredentials,
            (success: any) => {
                notify("success", success.message);
                Navigation(UrlRouter.APP_DASHBOARD, {replace: true});
            },
            (error: any) => {
                console.log({ERROR_API_SIGNIN: error});
                notify("error", error.message);
            },
        );
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
                    type="password"
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