const INIT_HISTORY = "INIT_HISTORY";
const ADD_HISTORY = "ADD_HISTORY";

const reducer = (state = [], action) => { 
  switch(action.type){
    case INIT_HISTORY:
      return action.history;
    case ADD_HISTORY:
      if(state.length > 20) [ action.place, state.slice(0, state.length - 1) ]
      else return [ action.place, ...state ];
    default:
      return state;
  }
}

export default reducer;