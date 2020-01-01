import React, { useState, createContext, useEffect } from 'react';
import app from '../firebase';


export const WeightContext = createContext();

const WeightProvider = ({ children }) => {
     const [currentUser, setCurrentUser] = useState(null)
     const [weights, setWeights] = useState([
          { weighs: 23, id: 1 },
          { weighs: 23, id: 2 },
          { weighs: 23, id: 3 },
          { weighs: 23, id: 4 },
          { weighs: 23, id: 5 },
          { weighs: 23, id: 6 }

     ]);


     useEffect(() => {
          app.auth().onAuthStateChanged(setCurrentUser);
     }, [])





     return (
          <WeightContext.Provider value={[weights, setWeights, currentUser]}>
               {children}
          </WeightContext.Provider>
     )
}

export default WeightProvider;
