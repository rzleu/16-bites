import * as SessionAPIUtil from '../utils/sessionApi';

export const RECEIVE_CURR_USER = 'RECEIVE_CURR_USER';
export const LOGOUT_CURR_USER = 'LOGOUT_CURR_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrUser = (curUser) => ({
  type: RECEIVE_CURR_USER,
  payload: curUser,
});

const logoutCurrUser = () => ({
  type: LOGOUT_CURR_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const signup = (user) => (dispatch) =>
  SessionAPIUtil.signup(user).then(
    (user) =>
      dispatch(receiveCurrUser(user)).catch((errors) => console.log('WHAT')),
    (error) => dispatch(receiveErrors(error.responseJSON)),
  );

export const login = (user) => (dispatch) =>
  SessionAPIUtil.login(user).then(
    (curUser) => dispatch(receiveCurrUser(curUser)),
    (error) => dispatch(receiveErrors(error.responseJSON)),
  );

export const logout = () => (dispatch) =>
  SessionAPIUtil.logout().then(
    () => dispatch(logoutCurrUser()),
    (error) => dispatch(receiveErrors(error.responseJSON)),
  );
