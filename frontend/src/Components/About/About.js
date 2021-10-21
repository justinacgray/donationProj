import React, { Fragment } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";
import aboutPg from "../../Images/about-pg.jpg";
import "./About.css";

const About = () => {
    return (
        <Fragment>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <Layout>
                <h1>About Us</h1>

                <section className="about-pg">
                    <img src={aboutPg} alt="aboutPg" />
                </section>
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
                    illum tenetur pariatur nam nemo! Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Quis laborum suscipit qui nemo
                    sed nulla atque natus fuga, in aut alias itaque porro? Illo
                    unde repudiandae nisi voluptatum quia vitae! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Optio
                    aspernatur aperiam accusantium eaque perferendis ut maxime,
                    explicabo ratione, distinctio cupiditate dignissimos dolor
                    vero quis illum harum molestias quas perspiciatis.
                    Veritatis.
                </p>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quo deleniti nihil esse nobis accusantium natus odio, eaque
                    molestias minima qui, numquam tempora explicabo similique
                    unde rerum quis earum magni aperiam.
                </p>
            </Layout>
        </Fragment>
    );
};

export default About;
