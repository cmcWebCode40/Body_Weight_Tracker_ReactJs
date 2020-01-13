import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background: var(--color-bodyDark);
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  jsutify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <Wrapper>
      <Content>
        <FontAwesomeIcon icon="times-circle" size="4x" color="#eaea" spin />
      </Content>
    </Wrapper>
  );
};

export default Loader;
