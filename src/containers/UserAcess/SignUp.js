import React, { useState, useCallback } from 'react'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import fitman from '../../img/logo/fitman.svg'
// import app from '../../firebase';
// import firebase from '../../firebase';

const Header = styled.div`
     text-align:center;
     margin: 1rem 0 0 0 ; 
     padding: 27px 0 0 0;

     h1 {
          color: var(--color-white);
          margin: 0rem 0 0 0 ;
          font-size: 22px;
          padding: 40px 0 0 0;
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
     top:45%;
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
     width:100%;
`
const Section = styled.section`
   margin: 3rem  0 0 0 ;
`

const Image = styled.img`
     height: 130px;
     width: 130px;
     border-radius: 50%;

`

const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    margin: .5rem  0 6rem 0;
`


const SignUp = ({ history }) => {
    const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [code, setCode] = useState('')

    const handleSignUp = useCallback();
    // async event => {
    //     event.preventDefault();
    //     const { email, password } = event.target.elements
    //     try {
    //         await app.auth().createUserWithEmailAndPassword(email.value, password.value);
    //         history.push('/weights')
    //     } catch (error) {
    //         alert(error);
    //     }
    // }

    return (
        <Div>
            <Section>
                <Header>
                    <h1>Welcome ! SignUp Here </h1>
                </Header>
                <ImageWrapper>
                    <Image src={fitman} alt="joggling" />
                </ImageWrapper>
                <FormWrapper>
                    <Form onSubmit={handleSignUp}>
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <input value={name} type="text" placeholder='Enter your Name ...' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="name">Email</Label>
                            <input type="email" name="email" placeholder='Enter your email address..' />
                        </div>
                        <div>
                            <Label htmlFor="name">Password</Label>
                            <input name="password" type="password" placeholder='Enter password' />
                        </div>
                        <input type="submit" value="Sign Up" />
                    </Form>
                </FormWrapper>
            </Section>
        </Div>


    );
}

export default withRouter(SignUp);