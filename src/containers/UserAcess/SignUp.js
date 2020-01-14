import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { store } from "react-notifications-component";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fitman from "../../img/logo/undraw_personal_trainer_ote3.svg";
import Loader from "../loader/Loader";
import app from "../../firebase";

const Header = styled.div`
  text-align: center;
  margin: 1rem 0 0 0;
  padding: 27px 0 0 0;

  h1 {
    color: var(--color-white);
    margin: 0rem 0 0 0;
    font-size: 22px;
    padding: 40px 0 0 0;
  }
`;
const Label = styled.label`
  display: block;
  color: var(--color-white);
  font-size: 1.7rem;
  font-weight: 400;
`;
const FormWrapper = styled.div`
  position: absolute;
  transform: translate(-60%, -80%);
  top: 45%;
  left: 50%;
  height: 35%;
  width: auto;
`;

const Form = styled.form`
  width: 100%;
  align-items: center;
  margin: 16rem 0 0 0;
  & > div {
    margin: 2rem 0 0 0;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    padding: 7px 25px;
    width: 100%;
    border-radius: 6px;
    border: none;
  }

  button {
    padding: 7px 25px;
    width: 100%;
    border-radius: 6px;
    border: none;
    margin: 4rem 0 0 0;
    background: var(--color-primary);
    font-weight: 600;
    color: var(--color-text);
    cursor: pointer;
  }
`;

const Div = styled.div`
  background: var(--color-bodyColor);
  height: 100vh;
  width: 100%;
`;
const Section = styled.section`
  margin: 3rem 0 0 0;
`;

const Image = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 50%;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0 6rem 0;
`;

const Info = styled.div`
  font-size: 17px;
  color: #fff;

  a {
    color: var(--color-primary);
  }
`;

const SignUp = ({ history }) => {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async event => {
    event.preventDefault();

    const { email, password } = event.target.elements;
    try {
      setIsLoading(true);
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      setIsLoading(null);
      history.push("/weights");
    } catch (error) {
      setIsError(error.message);
      setIsLoading(null);
    }
  };

  const notificationsButtons = (message, type) => {
    setTimeout(() => {
      store.addNotification({
        title: "",
        message: `${message}`,
        type: `${type}`,
        container: "top-center",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 1000
        }
      });
    }, 2000);
    clearTimeout();
  };

  return (
    <Div>
      <Section>
        <Header>
          <h1>Welcome ! SignUp Here </h1>
        </Header>
        <ImageWrapper>
          <Image src={fitman} alt="joggling" />
        </ImageWrapper>
        {isError && <h2>{notificationsButtons(isError, "danger")}</h2>}
        <FormWrapper>
          <Form onSubmit={handleSignUp}>
            <div>
              <Label htmlFor="name">
                <FontAwesomeIcon
                  style={{ marginRight: "1rem" }}
                  icon="user"
                  size="1x"
                />
                Name
              </Label>
              <input type="text" placeholder="Enter your Name ..." />
            </div>
            <div>
              <Label htmlFor="name">
                <FontAwesomeIcon
                  style={{ marginRight: "1rem" }}
                  icon="envelope"
                  size="1x"
                />
                Email
              </Label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address.."
              />
            </div>
            <div>
              <Label htmlFor="name">
                <FontAwesomeIcon
                  style={{ marginright: "1rem" }}
                  icon="key"
                  size="1x"
                />
                Password
              </Label>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
              />
            </div>
            <button type="submit"> {isLoading ? <Loader /> : "Signup"}</button>
            <Info>
              <p>Have an account login here</p>
              <a href="/login">Login</a>
            </Info>
          </Form>
        </FormWrapper>
      </Section>
    </Div>
  );
};

export default withRouter(SignUp);
