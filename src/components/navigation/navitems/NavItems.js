import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavItem from '../navitems/NavItem';

const Nav = styled.nav`
     display:flex;
     align-items: center;
     margin: 0rem 8rem  0 0;
`
const Ul = styled.ul`
     display:flex; 
     text-align:center;
     height : 100%;
     margin : -1rem  0 0 0 ;
`

function NavItems({ mobile, clicked }) {
     return (
          <Nav mobile={mobile}>
               <Ul mobile={mobile}>
                    <NavItem clicked={clicked} title={'Home'} mobile={mobile} link='/'>  <FontAwesomeIcon
                         icon="home"
                         size="2x"
                    /> </NavItem>
                    <NavItem clicked={clicked} title={"Login"} mobile={mobile} link='/Login'><FontAwesomeIcon
                         icon="user"
                         size="2x"
                    /></NavItem>
                    <NavItem clicked={clicked} title={"SignUp"} mobile={mobile} link='/signup'>
                         <FontAwesomeIcon
                              icon="address-card"
                              size="2x"
                         /> </NavItem>
               </Ul>
          </Nav>
     )
}



export default NavItems

