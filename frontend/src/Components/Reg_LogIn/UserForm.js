import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "./regLog.css";

const UserForm = () => {
    let history = useHistory();

    const companyOrUserForm = (e) => {
        // alert(e);
        if (e === "companyForm") {
            history.push(e);
        }
    };
    return (
        <Fragment className="form">
            <Form className="form">
                <h3 className="title">Register/Sign Up</h3>
                <FormGroup check>
                    <Label check>
                        <Input
                            type="radio"
                            name="companyOrUser"
                            value="companyForm"
                            onChange={(e) => companyOrUserForm(e.target.value)}
                        />
                        Company Sign Up
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
                <Input type="submit" id="submit" />
            </Form>
        </Fragment>
    );
};

export default UserForm;
