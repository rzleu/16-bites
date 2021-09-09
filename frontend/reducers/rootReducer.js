import { combineReducers } from 'redux';
import sessionsReducer from './sessionsReducer';
import errorsReducer from './errorReducder';

export default combineReducers({
  session: sessionsReducer,
  errors: errorsReducer,
});
