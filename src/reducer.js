export const initialState = {
    basket: ['apelsin', 'kråka', 'häst'],
  };


  //state communicates with the data-layer, action is that smth will be done to the layer.
  function reducer(state, action){
      switch(action.type){
            
            case 'ADD_TO_BASKET':
              //logic for adding to basket.
            break;

            case 'REMOVE_FROM_BASKET':
              //logic for removing from basket.
            break;

            default:
                return state;
      }
  }

  export default reducer;