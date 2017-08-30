import darkSky from 'dark-sky';

const darkSkyAPI = new darkSky("c9712da792696983961bb047c616359d");

const SET_WEATHER_TIME_MACHINE = "SET_WEATHER_TIME_MACHINE";
const TOGGLE_OVERLAY = "TOGGLE_OVERLAY";

const setWeatherTimeMachine = weather => ({
  type: SET_WEATHER_TIME_MACHINE, weather
});

const toggleOverlay = () => ({
  type: TOGGLE_OVERLAY
});

const reducer = (state = {weather: {}, active: false}, action) => { 
  switch(action.type){
    case SET_WEATHER_TIME_MACHINE:
      return Object.assign({}, state, { weather: action.weather });
    case TOGGLE_OVERLAY:
      return Object.assign({}, state, { active: !state.active });
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

export const toggleTimeMachineOverlay = () => dispatch => {
  dispatch(toggleOverlay());
}

export default reducer;