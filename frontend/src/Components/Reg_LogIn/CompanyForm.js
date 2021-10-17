import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers";
// import * as yup from "yup";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "reactstrap";

// typically will go in another file.
// const schema = yup.object().shape({
//     companyName: yup.string().required(),
//     dbaName: yup.string().required(),
//     companyemail: yup.email().required(),
//     password: yup.string.min(7).max(15).required,
//     confirmPassword: yup.string().oneOf([yup.ref("password"), null]), //built in method
// });
const submitForm = (data) => {};

const CompanyForm = () => {
    // const { register, handleSubmit, errors } = useForm({
    //     resolver: yupResolver(schema),
    // });
    return (
        <Fragment className="form">
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
        </Fragment>
    );
};

export default CompanyForm;
