import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LinksItem = styled.li`
     display: flex;
`

const NavLinkStyled = styled(NavLink) `
     display : flex ;
     text-transition : uppercase;
     align-items: center;
     border-bottom: ${props => (props.mobile ? '1px solid transparent' : '2px solid transparent')};
     font-size:1.2rem;
     padding: ${props => (props.mobile ? '2.2rem 2rem' : '1.4rem')};
     margin: ${props => (props.mobile ? '2 0rem' : '0 1rem')};
     font-weight: 400;
     color: var(--color-white);
     transition: all 0.2s;

     &:hover {
          border-bottom: ${props => (props.mobile ? ' 1px solid var(--color-white)' : ' 2px solid var(--color-white)')};
          transition: all 0.2s;
     }

     .active {
          border-bottom: ${props => (props.mobile ? ' 1px solid var(--color-white)' : ' 2px solid var(--color-white)')};
          
     }
`

function NavItems({ link, children, mobile, clicked }) {
     return (
          <LinksItem>
               <NavLinkStyled onClick={clicked} exact activeClassName='active' mobile={mobile} to={link}>{children}</NavLinkStyled>
          </LinksItem>
     )
}

export default NavItems

