import React, { Fragment, useEffect, useState } from "react";
import CompanyForm from "./CompanyForm";
import UserForm from "./UserForm";
import NavBar from "../../Template/NavBar/NavBar";
import { FormGroup, Label, Input } from "reactstrap";
import Layout from "../../Template/Layout";
import { Helmet } from "react-helmet";

const Register = () => {
    return (
        <Fragment>
            <Layout>
                <Helmet>
                    <title>Register</title>
                </Helmet>
                <UserForm />
            </Layout>
        </Fragment>
    );
};

export default Register;
