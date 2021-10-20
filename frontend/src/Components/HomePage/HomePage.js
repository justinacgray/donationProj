import React, { Fragment } from "react";
import Layout from "../../Template/Layout";
import Helmet from "react-helmet";

// child component to Layout
const HomePage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Layout>
                <header className="masthead">
                    <div className="container px-4 px-lg-5 h-100">
                        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-8 align-self-end">
                                <h1 className="text-white font-weight-bold">
                                    Let's Fund Your Dreams
                                </h1>
                                <hr className="divider" />
                            </div>
                            <div className="col-lg-8 align-self-baseline">
                                <p className="text-white-75 mb-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quidem reiciendis nam
                                    porro impedit nihil provident facere
                                    laborum, laboriosam excepturi saepe!
                                    Adipisci ea aut quos consequuntur illo,
                                    tempore nulla
                                </p>
                                <a
                                    className="btn btn-primary btn-xl"
                                    href="#about">
                                    Find Out More
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="page-section bg" id="about">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-white mt-0">
                                    We've got what you need!
                                </h2>
                                <hr className="divider divider-light" />
                                <p className="text-white-75 mb-4">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Ipsa illo reprehenderit
                                    repudiandae eveniet, officiis suscipit. Qui,
                                    officiis aut magni quo possimus quisquam id
                                    magnam velit. Pariatur alias repellendus ab
                                    deserunt.
                                </p>
                                <a
                                    className="btn btn-light btn-xl"
                                    href="#services">
                                    Get Started!
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </Fragment>
    );
};

export default HomePage;
