export const initialState = {
    basket: [],
  };


  // reducer listenes to the actions. 

  //state communicates with the data-layer, action is that smth will be done to the layer.
  function reducer(state, action){
      console.log(action);// so we see what action is being dispatched. 
      
    
    switch(action.type){
            
            case 'ADD_TO_BASKET':
              //logic for adding to basket.
              return { 
                  ...state, // returns whatever is in the basket-object. 
                basket: [...state.basket, action.item]   // immutable update. 
                }; // return the baseket  + the item
            

            case 'REMOVE_FROM_BASKET':
              //logic for removing from basket.
            
            return { state }
            default:
                return state;
      }
  };

  export default reducer;