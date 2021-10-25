import React, { Fragment } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "./regLog.css";

const submitForm = (data) => {};

const CompanyForm = () => {
    let history = useHistory();

    const companyOrUserForm = (e) => {
        // alert(e);
        if (e === "register") {
            history.push(e);
        }
    };
    // const { register, handleSubmit, errors } = useForm({
    //     resolver: yupResolver(schema),
    // });
    return (
        <Fragment className="form">
            <Layout>
                <Form className="form">
                    <h3 className="title">Register/Sign Up</h3>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="companyOrUser"
                                value="register"
                                onChange={(e) =>
                                    companyOrUserForm(e.target.value)
                                }
                            />
                            Donor Sign Up
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="companyName">Company Name</Label>
                        <Input
                            type="text"
                            name="companyName"
                            id="companyName"
                            placeholder="Company Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dbaName">DBA Name</Label>
                        <Input
                            type="text"
                            name="dbaName"
                            id="dbaName"
                            placeholder="DBA Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="companyemail">Company Email</Label>
                        <Input
                            type="email"
                            name="companyemail"
                            id="companyemail"
                            placeholder="Company email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input
                            type="password"
                            name="confirmpassword"
                            id="confirmPassword"
                            placeholder="Retype Password"
                        />
                    </FormGroup>
                    <Input type="submit" id="submit" />
                </Form>
            </Layout>
        </Fragment>
    );
};

export default CompanyForm;
