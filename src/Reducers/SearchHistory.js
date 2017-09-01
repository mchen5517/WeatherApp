/***** CONSTANTS *****/
const MAX_SEARCH_HISTORY_LENGTH = 20;

/***** ACTIONS ******/
const ADD_HISTORY = "ADD_HISTORY";

/***** ACTION CREATORS *****/
const addHistory = searchStr => ({
  type: ADD_HISTORY, searchStr
});

/***** REDUCERS *****/
const reducer = (state = [], action) => { 
  switch(action.type){
    case ADD_HISTORY:
      if(state.length >= MAX_SEARCH_HISTORY_LENGTH) {
        return [ action.searchStr, 
                  ...state.filter(searchStr => action.searchStr !== searchStr)
                          .slice(0, MAX_SEARCH_HISTORY_LENGTH - 1) 
                ]
      }
      else return [ action.searchStr, ...state.filter(searchStr => action.searchStr !== searchStr) ];
    default:
      return state;
  }
}

/***** DISPATCHERS *****/
export const pushSearchHistory = searchStr => dispatch => {
  dispatch(addHistory(searchStr));
}

export default reducer;