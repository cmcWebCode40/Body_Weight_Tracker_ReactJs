import React from 'react';
import styled from 'styled-components';
import Logo from '../../logo/Logo';
import Containers from '../../../layout/elements/Containers';
import NavItems from '../navitems/NavItems';


const FixedWrapper = styled.div`
     position : fixed ;
     background:var(--color-bodyColor);
     padding: 0rem 2rem;
     top : 0;
     left : 0;
     width : 100%;
     height: 8rem;
     z-index: 2;

     @media ${props => (props.theme.mediaQueries.smallest)} {
          display: none;
     }
`
const Wrapper = styled.div`
     display: flex;
     justify-content: space-between;
`
const Navbar = () => {
     return (
          <div>
               <FixedWrapper>
                    <Containers>
                         <Wrapper>
                              <Logo />
                              <NavItems />
                         </Wrapper>
                    </Containers>
               </FixedWrapper>
          </div>

     )
}
export default Navbar;
