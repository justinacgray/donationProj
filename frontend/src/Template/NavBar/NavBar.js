import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import {
    Image,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

const NavBar = () => {
    //  isOpen is set to false and setIsOpen is a function that will change the value to open
    const [isOpen, setIsOpen] = useState(false);
    // pass the opposite value that it's suupposed to be
    const Toggle = () => setIsOpen(!isOpen);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(!showModal);

    return (
        <Fragment>
            <Navbar className="navbar" color="light" light expand="md">
                <NavbarBrand href="/" className="logo-image">
                    {/* <Image
                        src="./Images/logo-7412069.jpg"
                        alt=""
                        fluid
                        rounded
                    /> */}
                    Hesed Works
                </NavbarBrand>
                <NavbarToggler onClick={Toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="navbar-container" navbar>
                        <NavItem className="nav-item">
                            <Link className="nav-link" to="/about">
                                About Us
                            </Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link className="nav-link" to="/resources">
                                Resources
                            </Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link className="nav-link" to="/dashboard">
                                Dashboard
                            </Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link className="nav-link" to="/fundraiser">
                                Current Fundraisers
                            </Link>
                        </NavItem>
                        {/* <NavItem className="nav-item">
                            <Link className="nav-link" to="/give_fundraise">
                                Give/Fundraise
                            </Link>
                        </NavItem> */}
                        <NavItem className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link className="nav-link" to="/companyForm">
                                Register/Sigin
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Fragment>
    );
};

export default NavBar;
