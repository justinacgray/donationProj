import React, { Fragment, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./NavBar.css";
import {
    FormGroup,
    Label,
    Input,
    Popover,
    PopoverHeader,
    PopoverBody,
    Modal,
    Button,
} from "reactstrap";
import Storage from "../../Helper/Storage";
import SignIn from "../../Components/Reg_LogIn/SignIn";

const NavBar = () => {
    let history = useHistory();
    //  isOpen is set to false and setIsOpen is a function that will change the value to open
    const [isOpen, setIsOpen] = useState(false);
    // pass the opposite value that it's suupposed to be
    const Toggle = () => setIsOpen(!isOpen);

    //show modal when user/company logs in
    const [showModal, setShowModal] = useState(false);

    //opens modal upon clicking login from popover
    const openModal = () => setShowModal(!showModal);

    //using Storage function
    const signIn = Storage.get("signIn");

    // const logOut = Storage.clear;

    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggleRegLogIn = () => setPopoverOpen(!popoverOpen);

    const regOrLogIn = (e) => {
        // alert(e);
        if (e === "login") {
            openModal();
        } else {
            history.push(e);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link to="/" className="navbar-brand">
                    <Icons.FaHandHoldingHeart className="hand-heart-logo" />
                    HESED WORKS
                </Link>
                <button
                    onClick={Toggle}
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div
                    className={`collapse navbar-collapse ${
                        isOpen ? "show" : ""
                    }`}
                    id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link px-lg-3 py-3 py-lg-4"
                                to="/about">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link px-lg-3 py-3 py-lg-4"
                                to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link px-lg-3 py-3 py-lg-4"
                                to="/resources">
                                Resources
                            </Link>
                        </li>
                        {signIn ? (
                            <li className="nav-item">
                                <Link
                                    className="nav-link px-lg-3 py-3 py-lg-4"
                                    to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                        ) : null}
                        <li className="nav-item">
                            <Link
                                className="nav-link px-lg-3 py-3 py-lg-4"
                                to="/fundraiser">
                                Current Fundraisers
                            </Link>
                        </li>
                        <li
                            className="nav-link px-lg-3 py-3 py-lg-4"
                            id="Popover1"
                            onClick={toggleRegLogIn}>
                            Register/Login
                        </li>

                        {/* <li className="nav-item">
                            <Button onClick={Storage.clear} value="clear">
                                Clear Local
                            </Button>
                        </li> */}
                    </ul>
                </div>
            </div>
            <Fragment>
                <Popover
                    placement="bottom"
                    isOpen={popoverOpen}
                    target="Popover1"
                    toggle={toggleRegLogIn}>
                    <PopoverHeader>Popover Title</PopoverHeader>
                    <PopoverBody>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    //name must be the same as other radio button so you can be grouped the same
                                    name="regLogIn"
                                    value="register"
                                    onChange={(e) => regOrLogIn(e.target.value)}
                                />
                                Register
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    //name must be the same as other radio button so you can be grouped the same
                                    name="regLogIn"
                                    value="login"
                                    onChange={(e) => regOrLogIn(e.target.value)}
                                />
                                Log In
                            </Label>
                        </FormGroup>
                    </PopoverBody>
                </Popover>
                <Modal isOpen={showModal} toggle={openModal}>
                    <SignIn />
                </Modal>
            </Fragment>
        </nav>
    );
};

export default NavBar;
