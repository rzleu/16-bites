import * as SessionAPIUtil from '../utils/sessionApi';

export const RECEIVE_CURR_USER = 'RECEIVE_CURR_USER';
export const LOGOUT_CURR_USER = 'LOGOUT_CURR_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrUser = (curUser) => ({
  type: RECEIVE_CURR_USER,
  payload: curUser,
});

const logoutCurrUser = () => ({
  type: LOGOUT_CURR_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ALL_ERRORS,
  errors,
});

export const signup = (user) => (dispatch) =>
  SessionAPIUtil.signup(user).then((user) => dispatch(receiveCurrUser(user)));

export const login = (user) => (dispatch) =>
  SessionAPIUtil.login(user).then((curUser) =>
    dispatch(receiveCurrUser(curUser)),
  );

export const logout = () => (dispatch) =>
  SessionAPIUtil.logout().then(() => dispatch(logoutCurrUser()));
