import React, { Fragment } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const UserForm = () => {
    return (
        <Fragment className="form">
            <Layout>
                <h3 className="title">Register/Sign Up</h3>
                <Form className="">
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="register" /> Register
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="login" /> Log In
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                            type="firstName"
                            name="firstName"
                            id="firstName"
                            placeholder="Enter first name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input
                            type="lastName"
                            name="lastName"
                            id="lastName"
                            placeholder="Enter last Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter an email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="Enter Password"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input
                            type="password"
                            name="onfirmpassword"
                            id="confirmPassword"
                            placeholder="Retype Password"
                        />
                    </FormGroup>
                </Form>
            </Layout>
        </Fragment>
    );
};

export default UserForm;
