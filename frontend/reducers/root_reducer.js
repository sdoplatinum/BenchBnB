import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import sessionsReducer from './session_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionsReducer,
  errors: errorsReducer
});

export default rootReducer;
