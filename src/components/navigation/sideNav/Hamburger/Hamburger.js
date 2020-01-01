import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div`
     width: 25px;
     height: 23px;
     position: relative;
     margin: .4rem 3.3rem 0 0 ;
     transform: rotate(0deg);
     transition: .5s ease-in-out;
     cursor: pointer;
     align-items:  center;

      span {
          display: block;
          position: absolute;
          height:4px;
          width: 75%;
          background: var(--color-white);
          border-radius:9px;
          opacity:1 ;
          left: 0;
          transform:rotate(0deg);
          transition: 0.25s ease-in-out;

          &:nth-child(1) {
               top:${props => (props.opened ? '18px' : '0px')};
               width:${props => (props.opened ? '0%' : '100%')};
               left:${props => (props.opened ? '50%' : 'null')};
          }

          &:nth-child(2) {
               transform: ${props => (props.opened ? 'rotate(45deg)' : null)}
          }

          &:nth-child(3) {
               top: 10px;
               transform: ${props => (props.opened ? 'rotate(-45deg)' : null)}
          }

          &:nth-child(2) {
               top: 10px;
          }

         

          &:nth-child(4) {
          top:${props => (props.opened ? '18px' : '20px')};
          width:${props => (props.opened ? '0%' : '100%')};
          left:${props => (props.opened ? '50%' : 'null')};
          }


     }
`;

const Hamburger = ({ opened, clicked }) => {
    return (
        <StyledHamburger onClick={clicked} opened={opened}>
            <span />
            <span />
            <span />
            <span />
        </StyledHamburger>
    )
}


export default Hamburger;

