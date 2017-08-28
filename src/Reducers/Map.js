const SET_MAP = "SET_MAP";
const SET_CENTER = "SET_CENTER";
const SET_BOUND = "SET_BOUND";


const setMap = map => ({
  type: SET_MAP, map
});

const setCenter = center => ({
  type: SET_CENTER, center
});

const setBound = bound => ({
  type: SET_BOUND, bound
});

const reducer = (state = {}, action) => { 
  switch(action){
    case SET_MAP:
      return Object.assign({}, state, { map: action.map });
    case SET_CENTER:
      return Object.assign({}, state, { center: action.center });
    case SET_BOUND:
      return Object.assign({}, state, { bound: action.bound });
  }
  return state;
}

export const addMapToStore = map => dispatch => {
  dispatch(setMap(map));
}

export default reducer;