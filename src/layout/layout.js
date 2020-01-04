import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';


import Navbar from '../components/navigation/Navbar/Navbar';
import SideNav from '../components/navigation/sideNav/SideNav';
import Home from '../containers/home/Home.js';
import SignUp from '../containers/UserAcess/SignUp';
import Login from '../containers/UserAcess/Login';
import Weights from '../containers/bodyweight/Weights';


const MainWrapper = styled.div`
     width: 100%;
     min-height :calc(100vh - 6rem);  
     display: flex;
     align-items:center;
     background: var(--color-bodyColor)
`


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
                         <Switch>
                              <Route path='/' exact component={Home} />
                              <Route path='/weights' exact component={Weights} />
                              <Route path='/Login' exact component={Login} />
                              <Route path='/Signup' exact component={SignUp} />
                              <Redirect to='/' />
                         </Switch>
                    </MainWrapper>
               </div>
          </Router>
     )

};

export default Layout;