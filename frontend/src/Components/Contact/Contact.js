import React, { Fragment } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";

const Contact = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Layout>
                <h1>Contact Goes Here</h1>
            </Layout>
        </Fragment>
    );
};

export default Contact;
