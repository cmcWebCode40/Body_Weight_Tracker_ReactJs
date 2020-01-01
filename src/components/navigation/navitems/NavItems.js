import React from 'react';
import styled from 'styled-components';
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
                    <NavItem clicked={clicked} mobile={mobile} link='/'> Home</NavItem>
                    <NavItem clicked={clicked} mobile={mobile} link='/yourweights'> Login</NavItem>
               </Ul>
          </Nav>
     )
}



export default NavItems

