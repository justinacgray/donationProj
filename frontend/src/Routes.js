import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import HomePage from "./Components/HomePage/HomePage";
import GiveFundraiseBtn from "./Components/Give_Fundraise/GiveFundraiseBtn";
import FundraiserList from "./Components/Fundraiser/FundraiserList";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import CompanyDashboard from "./Components/Dashboard/CompanyDashboard";
import Resources from "./Components/Resources/Resources";
import Contact from "./Components/Contact/Contact";
import GiveDonate from "./Components/Give_Fundraise/GiveDonate";
import Fundraise from "./Components/Give_Fundraise/Fundraise";
import Register from "./Components/Reg_LogIn/Register";
import CompanyForm from "./Components/Reg_LogIn/CompanyForm";
import UserForm from "./Components/Reg_LogIn/UserForm";

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route component={About} exact path="/about/" />
                <Route component={HomePage} exact path="/" />
                <Route
                    component={GiveFundraiseBtn}
                    exact
                    path="/give_fundraise/"
                />
                <Route component={FundraiserList} exact path="/fundraiser/" />
                <Route
                    component={UserDashboard}
                    exact
                    path="/user_dashboard/"
                />
                <Route
                    component={CompanyDashboard}
                    exact
                    path="/company_dashboard/"
                />
                <Route component={Resources} exact path="/resources/" />
                <Route component={Contact} exact path="/contact/" />
                <Route component={GiveDonate} exact path="/give_donate/" />
                <Route component={Fundraise} exact path="/fundraise/" />
                <Route component={Register} exact path="/register/" />
                <Route component={CompanyForm} exact path="/companyForm/" />
                <Route component={UserForm} exact path="/userForm/" />
            </Switch>
        </Fragment>
    );
};

export default Routes;
