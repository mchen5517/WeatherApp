import { combineReducers } from 'redux';
import searchHistory from './SearchHistory';
import map from './Map';

const rootReducer = combineReducers({
  searchHistory,
  map
});

export default rootReducer;
