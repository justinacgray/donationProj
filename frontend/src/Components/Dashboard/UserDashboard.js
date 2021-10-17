import React, { Fragment } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";

const UserDashboard = () => {
    return (
        <Fragment>
            <Helmet>
                <title>User Dashboard</title>
            </Helmet>
            <Layout>
                <h1>User Dashboard</h1>
            </Layout>
        </Fragment>
    );
};

export default UserDashboard;
