import {RECEIVE_CURR_USER, LOGOUT_CURR_USER} from '../actions/sessionsActions';

const initialState = {};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case RECEIVE_CURR_USER:
      return {...payload};
    case LOGOUT_CURR_USER:
      return initialState;
    default:
      return state;
  }
};
