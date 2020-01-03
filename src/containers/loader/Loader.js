import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
     background : var(--color-bodyDark);
     height:100vh;
     width:100%;
`
const Content = styled.div`
     display: flex;
     jsutify-content: center;
     align-items: center;
     margin: 1rem auto
`

const Loader = () => {
     return (
          <Wrapper>
               <FontAwesomeIcon
                    icon="times-circle"
                    size="4x"
               />
          </Wrapper>
     )
}