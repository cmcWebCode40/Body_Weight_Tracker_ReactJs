import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import SideNav from '../components/navigation/sideNav/SideNav';
import Home from '../containers/home/Home.js';
import Navbar from '../components/navigation/Navbar/Navbar';
import Loader from '../containers/loader/Loader';
import Weights from '../containers/bodyweight/Weights';

// import PrivateRoute from '../../containers/privateroute';
const SignUp = React.lazy(() => import('../containers/UserAcess/SignUp'));
const Login = React.lazy(() => import('../containers/UserAcess/Login'));





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
                         <Suspense fallback={<Loader />}>
                              <Switch>
                                   <Route path='/' exact component={Home} />
                                   <Route path='/weights' exact component={Weights} />
                                   <Route path='/Login' exact component={Login} />
                                   <Route path='/Signup' exact component={SignUp} />
                                   <Redirect to='/' />
                              </Switch>
                         </Suspense>
                    </MainWrapper>
               </div>
          </Router>
     )

};

export default Layout;