import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WeightContext } from '../../contextApi/WeightContext';
import { format } from 'path';


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
   justify-content: space-between;
   
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

     button {
          border: none;
          background : none;
          padding: 5px;
     }

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

const WeightItems = ({ weighs, id }) => {
     const [weights, setWeights] = useContext(WeightContext)
     // const [editItem, setEditItem] = useContext(WeightContext)
     const date = new Date();
     const formatDate = `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()} `

     const deleteWeights = id => {
          const filterWeights = weights.filter(weight => (weight.id !== id))
          return setWeights(filterWeights)
     }

     const handleDelete = () => {
          deleteWeights(id)
     }

     // const [editItem, setEditItem] = useState(null);

     // const findItem = id => {
     //      const item = weights.find(weight => weight.id === id)
     //      setEditItem(item);
     //      console.log(id);
     // }

     // const handleEditBtn = (e) => {
     //      e.preventDefault();
     //      // findItem(weights.id);
     // }

     return (
          <Wrapper>
               <Content>
                    <WeightRecord>
                         <p><Span>You Weigh</Span>:{weighs}kg</p>
                         <p><Span>Date:</Span> {formatDate}</p>
                    </WeightRecord>
                    <ActionButtons>
                         <button ><FontAwesomeIcon
                              icon="edit"
                              size="1x"
                              color="green"
                         /> </button>
                         <button onClick={handleDelete}><FontAwesomeIcon
                              icon="trash"
                              size="1x"
                              color="#e03333"
                         /> </button>
                    </ActionButtons>
               </Content>
          </Wrapper>
     )
}



export default WeightItems
