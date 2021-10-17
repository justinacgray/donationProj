import React, { Fragment } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";

// child component to Layout
const HomePage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Layout>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem voluptatem vitae voluptatibus numquam id, omnis quas?
                Obcaecati dolorem cupiditate dignissimos tempore officiis,
                labore quasi at ea facere esse aspernatur adipisci?
            </Layout>
        </Fragment>
    );
};

export default HomePage;
