import { combineReducers } from 'redux';
import searchHistory from './SearchHistory';
import map from './Map';
import weather from './Weather';
import weatherTimeMachine from './WeatherTimeMachine';

const rootReducer = combineReducers({
  searchHistory,
  map,
  weather,
  weatherTimeMachine
});

export default rootReducer;