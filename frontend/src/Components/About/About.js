import React, { Fragment } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";

const About = () => {
    return (
        <Fragment>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <Layout>
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur velit ipsum tempora beatae? Culpa, dicta sed!
                    Ullam, natus? Rem corrupti ut fugiat aperiam, dicta aut
                    illum tenetur pariatur nam nemo! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Saepe ad asperiores
                    consequatur maxime reprehenderit, optio, delectus aperiam
                    explicabo illo voluptatem odio facilis expedita quam?
                    Sapiente enim ad rem tempora corrupti.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur velit ipsum tempora beatae? Culpa, dicta sed!
                    Ullam, natus? Rem corrupti ut fugiat aperiam, dicta aut
                    illum tenetur pariatur nam nemo!
                </p>
            </Layout>
        </Fragment>
    );
};

export default About;
