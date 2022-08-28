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
                    onChange={(event: any) => setLoginCredentials({...loginCredentials, email: event.target.value})}
                    label="Email Address"
                    value={loginCredentials.email}
                />

                <TextInput
                    type="password"
                    id="password"
                    name="password"
                    onChange={(event: any) => setLoginCredentials({...loginCredentials, password: event.target.value})}
                    label="Password"
                    value={loginCredentials.password}
                />

                <Button label="Log in" onClick={handleSubmit} full />
            </form>
        </Layout>
    );
};

export default Login;