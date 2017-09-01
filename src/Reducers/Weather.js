import jsonp from 'jsonp';

const SET_WEATHER = "SET_WEATHER";

const setWeather = weather => ({
  type: SET_WEATHER, weather
});

const reducer = (state = {}, action) => { 
  switch(action.type){
    case SET_WEATHER:
      return action.weather;
    default:
      return state;
  }
}

export const editWeather = (lat, lng) => dispatch => {
  jsonp(`https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/${lat},${lng}`,
    null,
    (err, data) => {
      dispatch(setWeather(data))
    });
}

export const clearWeather = () => dispatch => {
  dispatch(setWeather({}));
}

export default reducer;