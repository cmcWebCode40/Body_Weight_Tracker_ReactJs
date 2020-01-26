import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../logo/Logo';
import NavItems from '../navitems/NavItems';
import Hamburger from '../sideNav/Hamburger/Hamburger';



const FixedWrapper = styled.div`
     position : fixed ;
     background:var(--color-bodyColor);
     padding: 0rem 2rem;
     border: none;
     top : 0;
     left : 0;
     z-index : 4;
     width : 100%;
     height: 6rem;
     display : none;
     @media ${props => props.theme.mediaQueries.smallest} {
          display: flex;
     }
`

const SideNavWrapper = styled.div`
 
     // @media ${props => props.theme.mediaQueries.largest} {
     //        visibility : hidden;
     // }
`
const Wrapper = styled.div`
     display: flex;
     justify-content: space-between;
     width : 100%;
     align-items : center;
`

const MenuBody = styled.div`
     display:flex;
     align-items: center;
     justify-content: center;
     width:100%;
     height: 100vh;
     position: fixed;
     border: none;
     margin-top: 6rem;
     z-index: 3;
     visibility : ${props => (props.opened ? 'visible' : 'hidden')};
     transform: translateY(${props => (props.opened ? '0%' : '-100%')})
     transtion: all 2s cubic-brezier(0.645, 0.05, 0.95);
     top: 0;
     left: 0;
     background: var(--color-bodyColor);
`

const SideNav = () => {
     const [isOpened, SetIsOpened] = useState(false)
     return (
          <SideNavWrapper>
               <FixedWrapper>
                    <Wrapper>
                         <Logo />
                         <Hamburger opened={isOpened} clicked={() => SetIsOpened(!isOpened)} />
                    </Wrapper>
               </FixedWrapper>
               <MenuBody opened={isOpened}>
                    <NavItems opened={isOpened} clicked={() => SetIsOpened(false)} />
               </MenuBody>
          </SideNavWrapper>

     )
}
export default SideNav;
