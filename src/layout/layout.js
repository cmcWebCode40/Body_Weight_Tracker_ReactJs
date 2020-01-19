import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import ReactNotifications from "react-notifications-component";
import styled from "styled-components";

import Navbar from "../components/navigation/Navbar/Navbar";
import SideNav from "../components/navigation/sideNav/SideNav";
import Home from "../containers/home/Home.js";
import SignUp from "../containers/UserAcess/SignUp";
import Login from "../containers/UserAcess/Login";
import Weights from "../containers/bodyweight/Weights";
import PrivateRoute from "../containers/privateroute/PrivateRoute";

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
  display: flex;
  align-items: center;
  background: var(--color-bodyColor);
`;

const PageNotFound = () => <h1>Not found</h1>;

const Layout = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <SideNav />
      </div>
      <div>
        <Navbar />
        <SideNav />
        <MainWrapper>
          <ReactNotifications />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Login" exact component={Login} />
            <PrivateRoute path="/weights" exact component={Weights} />
            <Route path="/Signup" exact component={SignUp} />
            <Route component={PageNotFound} />
            <Redirect to="/" />
          </Switch>
        </MainWrapper>
      </div>
    </Router>
  );
};

export default Layout;
