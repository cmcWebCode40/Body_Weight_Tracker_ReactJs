import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';


import Navbar from '../components/navigation/Navbar/Navbar';
// const SignUp = React.lazy(() => import('../containers/UserAcess/SignUp'));
// const Login = React.lazy(() => import('../containers/UserAcess/Login'));
// const Weights = React.lazy(() => import('../containers/bodyweight/Weights'));
import SideNav from '../components/navigation/sideNav/SideNav';
import Home from '../containers/home/Home.js';
import SignUp from '../containers/UserAcess/SignUp';
import Login from '../containers/UserAcess/Login';
import Weights from '../containers/bodyweight/Weights';




const MainWrapper = styled.div`
     width: 100%;
     min-height :calc(100vh - 6rem);  
     background: var(--color-bodyColor);
     margin: 0  auto;
`


const Layout = () => {
     return (
          <Router>
               <div>
                    <MainWrapper>
                         <Navbar />
                         <SideNav />
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