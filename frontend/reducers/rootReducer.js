import { combineReducers } from 'redux';
import sessionsReducer from './sessionsReducer';
import errorsReducer from './errorReducder';
import postReducer from './postReducer';
import userReducer from './userReducer';

export default combineReducers({
  posts: postReducer,
  users: userReducer,
  session: sessionsReducer,
  errors: errorsReducer,
});
