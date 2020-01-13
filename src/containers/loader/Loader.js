import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  //   position: absolute;
  //   transform: translate(-50%, -50%);
  //   top: 50%;
  //   left: 50%;
  //   //   background: var(--color-bodyDark);
  //   margin: 20px 20px;
  //   height: 400px;
  //   width: 400px;
`;
const Content = styled.div`
  display: flex;
  jsutify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: auto;
  text-align: center;
`;

const Loader = () => {
  return (
    <Wrapper>
      <Content>
        <FontAwesomeIcon icon="spinner" size="1x" color="#2e7ef0" spin />
      </Content>
    </Wrapper>
  );
};

export default Loader;
