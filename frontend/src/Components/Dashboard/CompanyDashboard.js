import React, { Fragment } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";

const CompanyDashboard = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Company Dashboard</title>
            </Helmet>
            <Layout>
                <h1>Company Dashboard</h1>
            </Layout>
        </Fragment>
    );
};

export default CompanyDashboard;
