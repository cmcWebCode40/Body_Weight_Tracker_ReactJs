import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import logo from '../../img/logo/logo.jpg';


const LogoWrapper = styled.div`
     color : var(--color-white);
     font-size: 1.2rem;
     display: flex;
     align-items: center;

`
const WebLogo = styled.img`
     height: 60px;
     width:60px;
     border-radius: 50%;
     display: flex;
     align-items: center;
     margin-top: -1rem;
`

const Logo = () => {
     return (
          <Link to='/'>
               <LogoWrapper>
                    <WebLogo src={logo} alt='website logo gym' />
               </LogoWrapper>
          </Link>
     )
}

export default Logo
