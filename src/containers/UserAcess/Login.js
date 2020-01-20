import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { store } from "react-notifications-component";
import { withRouter, Redirect } from "react-router-dom";
import { WeightContext } from "../../contextApi/WeightContext";
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

const Login = ({ history }) => {
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [notificationsButton] = useContext(WeightContext)

  const login = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      setIsLoading(true);
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
      history.push("/weights");
    } catch (error) {
      setIsError(error.message);
      setTimeout(() => setIsLoading(false), 3000);
      setIsError("");
    }
  };

  //   const [currentUser] = useContext(WeightContext);

  const notificationsButtons = (message, type) => {
    store.addNotification({
      title: "ALert",
      message: `${message}`,
      type: `${type}`,
      container: "top-center",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000
      }
    });
    setIsError("");
  };

  //     if (currentUser) {
  //       return <Redirect to="/" />;
  //     }

  return (
    <Div>
      <Header>
        <h1>Welcome Back ! Login Here </h1>
      </Header>
      <ImageWrapper>
        <Image src={fitman} alt="joggling" />
      </ImageWrapper>
      <FormWrapper>
        {isError && <h2>{notificationsButtons(isError, "danger")}</h2>}
        <Form onSubmit={login}>
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
              placeholder="Enter your email address.."
              name="email"
            />
          </div>
          <div>
            <Label htmlFor="name">
              <FontAwesomeIcon
                style={{ marginRight: "1rem" }}
                icon="key"
                size="1x"
              />
              Password
            </Label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
            />
          </div>
          <button type="submit"> {isLoading ? <Loader /> : "Login"}</button>

          <Info>
            <p>Have an account login here</p>
            <a href="/signup">Register</a>
          </Info>
        </Form>
      </FormWrapper>
    </Div>
  );
};

export default withRouter(Login);
