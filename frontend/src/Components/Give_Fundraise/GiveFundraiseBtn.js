import React, { Fragment } from "react";
// import Layout from "../../Template/Layout";
import Helmet from "react-helmet";
import { Button } from "reactstrap";

const GiveFundraiseBtn = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Give/Fundraise</title>
            </Helmet>
            <div>
                <Button color="primary">Donate</Button>
                <Button color="primary">Fundraise</Button>
            </div>
        </Fragment>
    );
};

export default GiveFundraiseBtn;
