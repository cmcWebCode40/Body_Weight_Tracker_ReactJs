import React, { useContext } from 'react';
import styled from 'styled-components';
import app from '../../firebase';
import { withRouter } from 'react-router-dom';
import { WeightContext } from '../../contextApi/WeightContext';
import WeightItems from './WeightItems';

const Wrapper = styled.div`
     margin: 10rem auto;
     text-align:center;
     width:50%;

     @media ${props => (props.theme.mediaQueries.small)} {
          width: auto
     }
`

const Header = styled.div`
     padding:2rem;

     h1 {
          font-size: 3.3rem;
          color:var(--color-bodyColor);
          margin: .4rem  0 .8rem 0;
     }

     p {
          font-style: italic;
          font-size:1.5em;
          color: var(--color-text);
     }

`

const Form = styled.form`
     margin: 2rem .3rem;

     input[type='text'] {
          padding:.5rem;
          border-radius:.5em;
          width:50%; 
          // border: none;
     }
`

const ListWrapper = styled.div`
     margin: 2rem 5rem;
     border: .2px solid var(--color-bodyColor);

     h3 {
          font-size : 16px;
          margin: 1.2rem;
          color:var(--color-white);
          background:var(--color-bodyColor);
     
     }
`

const ButtonDiv = styled.div`
     margin:1.5rem 0;

     button {
          background: var(--color-bodyColor);
          padding: 7px 20px ;
          font-size: 13px;
          color: var(--color-white);
          border: none;
          border-radius: 8px;
          margin: 0rem  .8rem ;
          outline: none;
          cursor: pointer;

          &:hover {
               transform: translateY(-4px);
               outline: hidden;
               background: var(--color-bodyLight);
               color: #fff;
               transition: all  .2s  ease-in;
          }
      
          &:active {
               transform: translateY(2px);
          }
  }

     button:nth-child(2) {
          background:#e03333;
     }

`


function Weights({ history }) {
     const [weights, setWeights] = useContext(WeightContext);



     return (
          <Wrapper>
               <Header>
                    <h1>Welcome !</h1>
                    <p>Start Tracking Your Weight Daily........</p>
               </Header>
               <Form >
                    <input type="text" />
                    <ButtonDiv>
                         <button type="submit">Add</button>
                         <button>clear All</button>
                    </ButtonDiv>
               </Form>

               <ListWrapper>
                    <h3> Your Track List</h3>
                    {
                         weights.length ?
                              weights.map(weight => (
                                   <WeightItems key={weight.id} weighs={weight.weighs} />
                              ))
                              : <p>You have no added any weight yet</p>

                    }


               </ListWrapper>
               <button onClick={(e) => {
                    e.preventDefault();
                    app.auth().signOut();
                    history.replace('/login')
               }}>Logout</button>
          </Wrapper>
     )

}

export default withRouter(Weights);

