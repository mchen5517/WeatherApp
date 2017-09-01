/***** ACTIONS *****/
const SET_MAP = "SET_MAP";
const SET_CENTER = "SET_CENTER";
const SET_BOUND = "SET_BOUND";
const SET_MARKER = "SET_MARKER";

/***** ACTION CREATORS *****/
const setMap = map => ({
  type: SET_MAP, map
});

const setCenter = center => ({
  type: SET_CENTER, center
});

const setBound = bound => ({
  type: SET_BOUND, bound
});

const setMarker = marker => ({
  type: SET_MARKER, marker
});

/***** REDUCERS *****/
const reducer = (state = { center: { lat: 53.22346, lng: -4.1980 }, bound: null, map: {}, marker: {} }, action) => { 
  switch(action.type){
    case SET_MAP:
      return Object.assign({}, state, { map: action.map });
    case SET_CENTER:
      return Object.assign({}, state, { center: action.center });
    case SET_BOUND:
      return Object.assign({}, state, { bound: action.bound });
    case SET_MARKER:
      return Object.assign({}, state, { marker: action.marker });
    default:
      return state;
  }
}

/***** DISPATCHERS *****/
export const addMapToStore = map => dispatch => {
  dispatch(setMap(map));
}

export const editCenter = center => dispatch => {
  dispatch(setCenter(center));
}

export const editBound = bound => dispatch => {
  dispatch(setBound(bound));
}

export const editMarker = marker => dispatch => {
  dispatch(setMarker(marker));
}

export default reducer;