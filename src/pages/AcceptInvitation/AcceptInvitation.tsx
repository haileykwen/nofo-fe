import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ACCEPT_INVITATION } from "../../apis/administrator";
import { notify } from "../../App";
import { Button, Layout, TextInput } from "../../components";
import { useQuery } from "../../hooks";
import { UrlRouter } from "../../router";
import "./AcceptInvitation.css";

const AcceptInvitation = () => {
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const query = useQuery();
    const Navigation = useNavigate();

    const handleSubmitAcceptInvitation = (event: any) => {
        event.preventDefault();

        if (password !== confirmPassword) return notify("error", "Password doesn't match");
        if (query.get("token") === "") return notify("error", "Empty token");
        
        const data = {
            password,
            token: query.get("token"),
        };
        
        API_ACCEPT_INVITATION(
            data,
            (success: any) => {
                notify("success", success.message);
                Navigation(UrlRouter.AUTH_LOGIN, {replace: true});
            },
            (error: any) => {
                console.log({ERROR_API_ACCEPT_INVITATION: error});
                notify("error", error.message);
            },
        );
    };

    return (
        <Layout>
            <form className="accept-invitation-form" onSubmit={handleSubmitAcceptInvitation}>
                <h1 className="text-[18px] text-[#121A24] font-medium">
                    Accept Invitation
                </h1>

                <TextInput 
                    id="password"
                    name="password"
                    onChange={(e: any) => setPassword(e.target.value)}
                    type="password"
                    value={password}
                    required
                    label="Password"
                />

                <TextInput 
                    id="confirm-password"
                    name="confirm-password"
                    onChange={(e: any) => setConfirmPassword(e.target.value)}
                    type="password"
                    value={confirmPassword}
                    required
                    label="Confirm Password"
                />

                <Button
                    label="Accept Invitation"
                />
            </form>
        </Layout>
    );
};

export default AcceptInvitation;