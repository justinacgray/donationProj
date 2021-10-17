import React, { Fragment } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";
import GiveFundraiseBtn from "../Give_Fundraise/GiveFundraiseBtn";

const FundraiserList = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Fundraiser</title>
            </Helmet>
            <Layout>
                <GiveFundraiseBtn />
                <h1>Current Fundraisers</h1>
            </Layout>
        </Fragment>
    );
};

export default FundraiserList;
