import React, { Fragment } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";
import "./Contact.css";

const Contact = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Layout>
                <div className="leftSide">
                    <img src="./Images/contactimg.jpg" alt="about-img" />
                </div>
                <div className="rightSide">
                    <h1> Contact Us</h1>

                    <form id="contact-form" method="POST">
                        <label htmlFor="name">Full Name</label>
                        <input
                            name="name"
                            placeholder="Enter full name..."
                            type="text"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            placeholder="Enter email..."
                            type="email"
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                            rows="6"
                            placeholder="Enter message..."
                            name="message"
                            required></textarea>
                        <button type="submit"> Send Message</button>
                    </form>
                </div>
            </Layout>
        </Fragment>
    );
};

export default Contact;
