const MAX_SEARCH_HISTORY_LENGTH = 20;

const ADD_HISTORY = "ADD_HISTORY";

const addHistory = searchStr => ({
  type: ADD_HISTORY, searchStr
});

const reducer = (state = [], action) => { 
  switch(action.type){
    case ADD_HISTORY:
      if(state.length >= MAX_SEARCH_HISTORY_LENGTH) {
        return [ action.searchStr, 
                  ...state.filter(searchStr => action.searchStr !== searchStr)
                          .slice(0, MAX_SEARCH_HISTORY_LENGTH - 1) 
                ]
      }
      else return [ action.searchStr, ...state ];
    default:
      return state;
  }
}

export const pushSearchHistory = searchStr => dispatch => {
  dispatch(addHistory(searchStr));
}

export default reducer;