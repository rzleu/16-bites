/* eslint-disable implicit-arrow-linebreak */
import * as SessionAPIUtil from '../utils/sessionApi';
import { receiveErrors } from './errorActions';

export const RECEIVE_CURR_USER = 'RECEIVE_CURR_USER';
export const LOGOUT_CURR_USER = 'LOGOUT_CURR_USER';

const receiveCurrUser = (curUser) => ({
  type: RECEIVE_CURR_USER,
  payload: curUser,
});

const logoutCurrUser = () => ({
  type: LOGOUT_CURR_USER,
});

export const signup = (user) => (dispatch) =>
  SessionAPIUtil.signup(user).then(
    (response) => dispatch(receiveCurrUser(response)),
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
