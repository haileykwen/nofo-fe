import { useState } from 'react';
import { API_SEND_INVITATION } from '../../apis';
import { notify } from '../../App';
import { Button, Layout, Modal, PageTitle, TextInput } from '../../components';
import "./Administrator.css";

const Administrator = () => {
    const dummyAdmins = [
        {
            id: 1,
            email: "superadmin@nofo.com",
            role: "superadmin"
        },
        {
            id: 1,
            email: "rohmanutinsa@nofo.com",
            role: "admin"
        },
        {
            id: 1,
            email: "mia@nofo.com",
            role: "admin"
        },
    ];
    const tableConfig = [
        {
            tableHeader: "No",
            objectKey: "index",
        },
        {
            tableHeader: "Email",
            objectKey: "email",
        },
        {
            tableHeader: "Role",
            objectKey: "role",
        },
    ]

    const [modalInvitation, setModalInvitation] = useState<boolean>(false);
    const [invitationData, setInvitationData] = useState<any>({
        email: "",
        role: "",
    });

    const handleResetInvitationData = () => {
        let tempInvitationData = invitationData;
        Object.keys(invitationData).map((key: any) => {
            tempInvitationData[key] = "";
        });
    };

    const handleSubmitInvitation = (event: any) => {
        event.preventDefault();
        API_SEND_INVITATION(
            invitationData,
            (success: any) => {
                notify("success", success.message);
                handleResetInvitationData();
                setModalInvitation(false);
            },
            (error: any) => {
                console.log({ ERROR_API_SIGNIN: error });
                notify("error", error.message);
                handleResetInvitationData();
                setModalInvitation(false);
            },
        );
    };

    return (
        <Layout>
            <PageTitle />

            <Button
                label="Create Invitation"
                onClick={() => setModalInvitation(true)}
                className="mt-5"
            />

            <section className='administrator-table-wrapper'>
                <table className="administrator-table">
                    {/* Table Header */}
                    <thead>
                        <tr className='administrator-table-header'>
                            {tableConfig.map((config: any, index: number) => {
                                return (
                                    <td key={index}>{config.tableHeader}</td>
                                );
                            })}
                        </tr>
                    </thead>

                    {/* Table Data */}
                    <tbody>
                        {dummyAdmins.map((admin: any, indexAdmin: number) => {
                            return (
                                <tr key={indexAdmin}>
                                    {tableConfig.map((config: any, index: number) => {
                                        return (
                                            <td key={index}>{index === 0 ? indexAdmin + 1 : admin[config.objectKey]}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>

            <Modal handleClose={() => setModalInvitation(false)} isOpen={modalInvitation}>
                <h1 className="text-[18px] text-[#121A24] font-medium mb-5">
                    Send Invitation
                </h1>

                <form className="flex flex-col gap-3">
                    <TextInput
                        label="Email Address"
                        type="email"
                        id="email"
                        name="email"
                        onChange={(event: any) => setInvitationData({ ...invitationData, email: event.target.value })}
                        required
                        value={invitationData.email}
                    />

                    <TextInput
                        label="Role"
                        type="text"
                        id="role"
                        name="role"
                        onChange={(event: any) => setInvitationData({ ...invitationData, role: event.target.value })}
                        required
                        value={invitationData.role}
                    />

                    <Button label="Send Invitation" onClick={handleSubmitInvitation} />
                </form>
            </Modal>
        </Layout>
    );
};

export default Administrator;