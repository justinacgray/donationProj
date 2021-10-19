import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./NavBar.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from "reactstrap";

const NavBar = () => {
    //  isOpen is set to false and setIsOpen is a function that will change the value to open
    const [isOpen, setIsOpen] = useState(false);
    // pass the opposite value that it's suupposed to be
    const Toggle = () => setIsOpen(!isOpen);

    const [showModal, setShowModal] = useState(false);

    // const openModal = () => setShowModal(!showModal);

    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link to="/" classNameName="navbar-brand">
                    <Icons.FaHandHoldingHeart classNameName="hand-heart-logo" />
                    HESED WORKS
                </Link>
                <button
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
                <div className="collapse navbar-collapse" id="navbarResponsive">
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
                        <li className="nav-item">
                            <Link
                                className="nav-link px-lg-3 py-3 py-lg-4"
                                to="/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link px-lg-3 py-3 py-lg-4"
                                to="/fundraiser">
                                Current Fundraisers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link px-lg-3 py-3 py-lg-4"
                                to="/companyForm">
                                Register/Sigin
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
