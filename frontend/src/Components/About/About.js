import React, { Fragment } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";

const About = () => {
    return (
        <Fragment>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <Layout>
                <h1>About Us</h1>
            </Layout>
        </Fragment>
    );
};

export default About;
