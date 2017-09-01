import jsonp from 'jsonp';

/***** ACTIONS *****/
const SET_WEATHER = "SET_WEATHER";

/***** ACTION CREATORS *****/
const setWeather = weather => ({
  type: SET_WEATHER, weather
});

/***** REDUCERS *****/
const reducer = (state = {}, action) => { 
  switch(action.type){
    case SET_WEATHER:
      return action.weather;
    default:
      return state;
  }
}

/***** REDUCERS *****/
export const editWeather = (lat, lng) => dispatch => {
  jsonp(`https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/${lat},${lng}`,
    null,
    (err, data) => {
      dispatch(setWeather(data))
    });
}

/***** DISPATCHERS *****/
export const clearWeather = () => dispatch => {
  dispatch(setWeather({}));
}

export default reducer;