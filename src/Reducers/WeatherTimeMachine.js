import jsonp from 'jsonp';
import moment from 'moment';

/***** ACTIONS *****/
const SET_WEATHER_TIME_MACHINE = "SET_WEATHER_TIME_MACHINE";
const TOGGLE_OVERLAY = "TOGGLE_OVERLAY";

/***** ACTION CREATORS *****/
const setWeatherTimeMachine = weather => ({
  type: SET_WEATHER_TIME_MACHINE, weather
});

const toggleOverlay = () => ({
  type: TOGGLE_OVERLAY
});

/***** REDUCEERS *****/
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

/***** DISPATCHERS *****/
export const editWeatherTimeMachine = (lat, lng, time) => dispatch => {
  jsonp(`https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/${lat},${lng},${moment(time).valueOf() / 1000}`,
    null,
    (err, data) => {
      dispatch(setWeatherTimeMachine(data))
    });
}

export const clearWeatherTimeMachine = () => dispatch => {
  dispatch(setWeatherTimeMachine({}));
}

export const toggleTimeMachineOverlay = () => dispatch => {
  dispatch(toggleOverlay());
}

export default reducer;