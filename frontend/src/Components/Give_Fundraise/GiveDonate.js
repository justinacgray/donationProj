import React, { Fragment } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const GiveDonate = () => {
    return (
        <Fragment>
            <Layout>
                <Helmet>
                    <title>Give/Donate</title>
                </Helmet>
                <Form className="">
                    <FormGroup>
                        <Label for="donateTo">
                            Who would you like to donate to?
                        </Label>
                        <Input
                            type="text"
                            name="donateTo"
                            id="donateTo"
                            placeholder="Donate to..."
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
                    <Button>Submit</Button>
                </Form>
            </Layout>
        </Fragment>
    );
};

export default GiveDonate;
