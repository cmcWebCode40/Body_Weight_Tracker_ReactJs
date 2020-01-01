import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
     margin: .5rem 1rem
     
`
const Content = styled.div`
     box-shadow: 0px 0px  2px rgb(145, 141, 141), 1px 2px   3px rgb(184, 182, 182);    
     padding: 1rem; 
     border-radius: .7rem;
     margin: 1rem .7rem ;
`

const WeightRecord = styled.div`
   display: flex;
   align-items:center;
   justify-content: space-around;
   
   p {
          font-size:14px;
  
     }
`
const Span = styled.span`
     color: var(--color-bodyColor);
`

const ActionButtons = styled.div`
     display:flex;
     align-items:center;
     justify-content: space-around;

     p {
          font-size:12px;
     }

     p:nth-child(1) {
          color:var(--color-primary)
     }
     p:nth-child(2) {
          color:#e03333;
     }
`

const WeightItems = ({ weighs }) => {

     return (
          <Wrapper>
               <Content>
                    <WeightRecord>
                         <p><Span>You Weigh</Span>:{weighs}</p>
                         <p><Span>Date:</Span> date</p>
                    </WeightRecord>
                    <ActionButtons>
                         <p>Edit</p>
                         <p>delete</p>
                    </ActionButtons>
               </Content>
          </Wrapper>
     )
}



export default WeightItems
