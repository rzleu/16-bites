import { combineReducers } from 'redux';
import sessionsReducer from './sessionsReducer';
import errorsReducer from './errorReducder';
import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer,
  session: sessionsReducer,
  errors: errorsReducer,
});
