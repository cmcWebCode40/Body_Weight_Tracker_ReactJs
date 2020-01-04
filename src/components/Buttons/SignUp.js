import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignUpButton = styled.button`
     background: var(--color-primary);
    padding: 10px 35px ;
    font-size: 18px;
    color: var(--color-text);
    border: none;
    border-radius: 8px;
    margin: 2rem 0 0 1.2em ;
    outline: none;
    cursor: pointer;

    @media${props => (props.theme.mediaQueries.small)} {
        padding: 8px 35px ;
        font-size: 16px;
   }

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

function SignUp() {
    return (
        <Link to='/signup'>
            <SignUpButton >
                SignUp
               </SignUpButton>
        </Link>

    )
}


export default SignUp;

