import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

//Sign in will be dynamic one for Company and another for individuals

const SignIn = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Give/Donate</title>
            </Helmet>
            <Form className="">
                <FormGroup>
                    <Label for="companyemail">Email</Label>
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
                <Button>Submit</Button>
            </Form>
        </Fragment>
    );
};

export default SignIn;
