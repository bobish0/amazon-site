//1. setup data layer
//2. to keep record of the basket,
//3. also keep track of the user and use users info. 
//typical copy-pase boilerplate code
import React, { createContext, useContext, useReducer } from "react";



// Creates the dataLayer (THIS IS THE DATALAYER)
export const StateContext = createContext();



// BUILDS A PROVIDER. children referrs to the App-component in index.js 
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children} 
  </StateContext.Provider>
);

// This is how we use the datalayer inside a component.
export const useStateValue = () => useContext(StateContext);