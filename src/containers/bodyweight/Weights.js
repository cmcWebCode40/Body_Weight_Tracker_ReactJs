import React, { useContext, useState } from "react";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import uuid from "uuid";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import app from "../../firebase";
import { withRouter } from "react-router-dom";
import { WeightContext } from "../../contextApi/WeightContext";

import WeightItems from "./WeightItems";

const Wrapper = styled.div`
  margin: 5rem 0 0 0;
  padding: 3rem 0 0 0;
  text-align: center;
  width: 100%;
  height: 100vh;
  background: var(--color-white);

  @media ${props => props.theme.mediaQueries.small} {
    width: 100%;
    height: 100vh;
  }
`;

const Header = styled.div`
  padding: 2rem;

  h1 {
    font-size: 3.3rem;
    color: var(--color-bodyColor);
    margin: 0.4rem 0 0.8rem 0;
  }

  p {
    font-style: italic;
    font-size: 1.5em;
    color: var(--color-text);
  }
`;

const Form = styled.form`
  margin: 2rem auto;
  width: 60%;
  @media ${props => props.theme.mediaQueries.small} {
    width: 100%;
  }

  input[type="number"] {
    padding: 0.5rem;
    border-radius: 0.5em;
    width: 50%;
    border: var(--color-bodyColor) 1px solid;
  }
`;

const ListWrapper = styled.div`
  margin: 2rem auto;
  border: 0.2px solid var(--color-bodyColor);
  width: 35%;

  @media ${props => props.theme.mediaQueries.small} {
    width: 70%;
  }

  h3 {
    font-size: 16px;
    margin: 1.2rem;
    color: var(--color-white);
    background: var(--color-bodyColor);
  }
`;

const ButtonDiv = styled.div`
  margin: 1.5rem 0;

  button {
    background: var(--color-bodyColor);
    padding: 7px 20px;
    font-size: 13px;
    color: var(--color-white);
    border: none;
    border-radius: 8px;
    margin: 0rem 0.8rem;
    outline: none;
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
      outline: hidden;
      background: var(--color-bodyLight);
      color: #fff;
      transition: all 0.2s ease-in;
    }

    &:active {
      transform: translateY(2px);
    }
  }

  button:nth-child(2) {
    background: #e03333;
  }
`;

const LogoutBtn = styled.button`
  background: var(--color-bodyColor);
  padding: 7px 20px;
  font-size: 13px;
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  margin: 0rem 0.8rem;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    outline: hidden;
    background: var(--color-bodyLight);
    color: #fff;
    transition: all 0.2s ease-in;
  }

  &:active {
    transform: translateY(2px);
  }
`;

function Weights({ history }) {
  const [weights, setWeights, notificationsButton] = useContext(WeightContext);
  // const [editItem, setEditItem] = useContext(WeightContext);
  const [text, setText] = useState();

  const handleChange = e => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setWeights([...weights, { weighs: text, id: uuid() }]);
    notificationsButton("New Weight Added", "success");
    setText("");
    console.log(weights);
  };

  const clearAll = () => {
    setWeights([]);
    notificationsButton("Deleted All", "success");
  };

  return (
    <Wrapper>
      <Header>
        <h1>Welcome !</h1>
        <p>Start Tracking Your Weight Daily........</p>
      </Header>
      <Form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={handleChange}
          placeholder="enter your weights..."
          required
        />

        <ButtonDiv>
          <button type="submit">
            Add <FontAwesomeIcon icon="plus-circle" size="1x" />
          </button>
          <button onClick={clearAll}>
            clear All
            <FontAwesomeIcon icon="times-circle" size="1x" />
          </button>
        </ButtonDiv>
      </Form>

      <ListWrapper>
        <h3> Your Track List</h3>
        {weights ? (
          weights.map(weight => (
            <WeightItems
              key={weight.id}
              weighs={weight.weighs}
              id={weight.id}
            />
          ))
        ) : (
          <p>You have no added any weight yet</p>
        )}
      </ListWrapper>
      <LogoutBtn
        onClick={e => {
          e.preventDefault();
          app.auth().signOut();
          history.replace("/login");
        }}
      >
        Logout
      </LogoutBtn>
    </Wrapper>
  );
}

export default withRouter(Weights);
