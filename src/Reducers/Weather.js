import darkSky from 'dark-sky';

const darkSkyAPI = new darkSky("c9712da792696983961bb047c616359d");

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
  darkSkyAPI
    .coordinates({lat, lng})
    .get()
    .then(data => dispatch(setWeather(data)));
}

export default reducer;