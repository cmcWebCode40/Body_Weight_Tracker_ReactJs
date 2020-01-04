import React, { useCallback, useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { withRouter, Redirect } from 'react-router-dom';
import { WeightContext } from '../../contextApi/WeightContext';
import fitman from '../../img/logo/fitman.svg'
// import app from '../../firebase';

const Header = styled.div`
     text-align:center;
     // margin: 0rem 0 -7rem 0 ; 
     padding: 0rem  0 -7rem 0;

     h1 {
          color: var(--color-white);
          margin: 4rem 0 0 0 ;
          font-size: 22px;
          padding: 70px 0 0 0 ;
     }

`
const Label = styled.label`
     display: block;
     color:var(--color-white);
     font-size: 1.7rem;
     font-weight:400;
`
const FormWrapper = styled.div`
     position: absolute;
     transform: translate(-60%,-80%);
     top:50%;
     left:50%;
     height: 35%;
     width:auto;
`

const Form = styled.form`
     width:100%;
     align-items:center;
     margin : 16rem  0 0 0 

     & > div {
          margin: 2rem 0 0 0 ;
     }

     input[type='text'] ,
     input[type='email'] ,
     input[type='password']{
          padding:7px 25px ;
          width:100%;
          border-radius:6px;
          border:none;
     }

     input[type='submit']{
          padding:7px 25px ;
          width:100%;
          border-radius:6px;
          border:none;
          margin: 4rem  0 0 0 ;
          background: var(--color-primary);
          font-weight: 600;
          color:var(--color-text);
          cursor:pointer;
     }
`

const Div = styled.div`
     background: var(--color-bodyColor);
     height:100vh;
     weight:100%;
     // margin: 2rem 0 -5rem 0;
     overflow: hidden;
`
const Image = styled.img`
     height: 130px;
     width: 130px;
     border-radius: 50%;
     margin : 0 0 -2rem 0;
`

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    margin: .5rem  0 -5rem 0;
`

// const Alert = styled.h2`
//      background: #ffdfdc;
//      color:#ff0000;
//      word-break:break;
//      border: 1px solid #ff0000;
//      padding: 10px;
//      margin:  6em auto;
//      border-radius: 10px;
//      width: 30%;
// `

const Login = ({ history }) => {
     const [isError, setIsError] = useState("");

     const login = useCallback()
     // async event => {
     //      event.preventDefault();
     //      const { email, password } = event.target.elements
     //      try {
     //           await app.auth().signInWithEmailAndPassword(email.value, password.value);
     //           history.push('/weights')
     //      } catch (error) {
     //           setIsError(error.message)
     //           // alert(error)
     //      }
     // }, [history]

     // const [currentUser] = useContext(WeightContext);

     const alertMessage = () => {
          return <p> {isError}</p>

     }

     // const message = setTimeout(() => {
     //      alertMessage();
     // }, 1000);

     // if (!currentUser) {
     //      return <Redirect to='/login' />
     // }

     return (
          <Div>
               <Header>
                    <h1>Welcome Back ! Login Here </h1>
               </Header>
               <ImageWrapper>
                    <Image src={fitman} alt="joggling" />
               </ImageWrapper>

               <FormWrapper>
                    {isError ? <h2>{alertMessage()}</h2> : <p></p>}
                    <Form onSubmit={login} >
                         <div>
                              <Label htmlFor="name">
                                   <FontAwesomeIcon
                                        icon="envelope"
                                        size="1x"
                                   />
                                   Email
                              </Label>
                              <input type="email" placeholder='Enter your email address..' name="email" />
                         </div>
                         <div>
                              <Label htmlFor="name">
                                   <FontAwesomeIcon
                                        icon="key"
                                        size="1x"
                                   />
                                   Password
                              </Label>
                              <input type="password" placeholder='Enter password' name="password" />
                         </div>
                         <input type="submit" value="Login" />
                    </Form>
               </FormWrapper>
          </Div>
     );


}

export default withRouter(Login);