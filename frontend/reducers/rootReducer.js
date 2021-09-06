import {combineReducers} from 'redux';
import sessionsReducer from './sessionsReducer';

export default combineReducers({
  session: sessionsReducer,
});
