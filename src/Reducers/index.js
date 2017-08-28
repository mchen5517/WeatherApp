import { combineReducers } from 'redux';
import searchHistory from './SearchHistory';
import map from './Map';
import weather from './Weather';

const rootReducer = combineReducers({
  searchHistory,
  map,
  weather
});

export default rootReducer;
