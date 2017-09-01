import axios from 'axios';

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
  axios
    .get(`https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/${lat},${lng}`)
    .then(res => dispatch(setWeather(res.data)));
}

export const clearWeather = () => dispatch => {
  dispatch(setWeather({}));
}

export default reducer;