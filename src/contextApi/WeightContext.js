import React, { useState, createContext, useEffect } from 'react';
// import app from '../firebase';

import Weights from '../containers/bodyweight/Weights';


export const WeightContext = createContext();

const WeightProvider = ({ children }) => {
     // const [currentUser, setCurrentUser] = useState(null)
     const [weights, setWeights] = useState(JSON.parse(localStorage.getItem('weights')));
     // const [editItem, setEditItem] = useState(null);

     // const editWeights = (title, id) => {
     //      const newWeights = weights.map(weight => (weights.id === id ? [title, id] : weight))
     //      setWeights(newWeights);
     // }

     useEffect(() => {
          localStorage.setItem('weights', JSON.stringify(weights))

     }, [weights])

     // useEffect(() => {
     //      app.auth().onAuthStateChanged(setCurrentUser);
     // }, [])


     return (
          <WeightContext.Provider
               value={[weights, setWeights,
                    // currentUser,
                    // editItem,
                    // setEditItem,
               ]}>
               {children}
          </WeightContext.Provider>
     )
}

export default WeightProvider;
