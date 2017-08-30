import darkSky from 'dark-sky';

const darkSkyAPI = new darkSky("c9712da792696983961bb047c616359d");

const SET_WEATHER_TIME_MACHINE = "SET_WEATHER_TIME_MACHINE";

const setWeatherTimeMachine = weather => ({
  type: SET_WEATHER_TIME_MACHINE, weather
});

const reducer = (state = {}, action) => { 
  switch(action.type){
    case SET_WEATHER_TIME_MACHINE:
      return action.weather;
    default:
      return state;
  }
}

export const editWeatherTimeMachine = (lat, lng, time) => dispatch => {
  darkSkyAPI
    .coordinates({lat, lng})
    .time(time)
    .get()
    .then(data => dispatch(setWeatherTimeMachine(data)));
}

export const clearWeatherTimeMachine = () => dispatch => {
  dispatch(setWeatherTimeMachine({}));
}

export default reducer;