import filterReducer from './filter_reducer';
import { combineReducers } from 'redux';

const uiReducer = combineReducers({
  bounds: filterReducer
});

export default uiReducer;
