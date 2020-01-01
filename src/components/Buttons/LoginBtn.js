import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginButton = styled.button`
     background: var(--color-white);
    padding: 10px 40px ;
    font-size: 18px;
    color: var(--color-bgColor);
    border: none;
    border-radius: 8px;
    margin: 1.7rem 2rem 0 1.2rem ;
    outline: none;
    cursor: pointer;

     &:hover {
          transform: translateY(-4px);
          outline: hidden;
          background: var(--color-bodyLight);
          color: #fff;
          transition: all  .2s  ease-in;
          cursor: pointer;
      }
      
     &:active {
          transform: translateY(2px);
      }
`

function LoginBtn() {
    return (
        <Link to='login'>
            <LoginButton >
                Login
               </LoginButton>
        </Link>

    )
}


export default LoginBtn;

