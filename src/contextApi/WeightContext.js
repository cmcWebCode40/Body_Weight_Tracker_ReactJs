import React, { useState, createContext, useEffect } from 'react';
import { store } from 'react-notifications-component';
import app from '../firebase';

import Weights from '../containers/bodyweight/Weights';


export const WeightContext = createContext();

const WeightProvider = ({ children }) => {
     const [currentUser, setCurrentUser] = useState(null)
     const [weights, setWeights] = useState(JSON.parse(localStorage.getItem('weights')));

     const notificationsButton = (message, type) => {
          store.addNotification({
               title: 'ALert',
               message: `${message}`,
               type: `${type}`,
               container: 'top-center',
               animationIn: ["animated", "fadeIn"],
               animationOut: ["animated", "fadeOut"],
               dismiss: {
                    duration: 3000
               }
          })
     }

     // const [editItem, setEditItem] = useState(null);

     // const editWeights = (title, id) => {
     //      const newWeights = weights.map(weight => (weights.id === id ? [title, id] : weight))
     //      setWeights(newWeights);
     // }

     useEffect(() => {
          localStorage.setItem('weights', JSON.stringify(weights))

     }, [weights])

     useEffect(() => {
          app.auth().onAuthStateChanged(setCurrentUser);
     }, [])


     return (
          <WeightContext.Provider
               value={[weights, setWeights,
                    notificationsButton,
                    currentUser,
                    // editItem,
                    // setEditItem,
               ]}>
               {children}
          </WeightContext.Provider>
     )
}

export default WeightProvider;
