import { Layout, PageTitle } from '../../components';
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

    return (
        <Layout>
            <PageTitle />
            
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
                                            <td key={index}>{index === 0 ? indexAdmin+1 : admin[config.objectKey]}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        </Layout>
    );
};

export default Administrator;