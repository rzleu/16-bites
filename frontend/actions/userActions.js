/* eslint-disable implicit-arrow-linebreak */
import * as UserApi from '../utils/userApi';

export const FETCH_USERS = 'FETCH_USERS';

const fetchUsersAction = (users) => ({
  type: FETCH_USERS,
  payload: users,
});

export const fetchUsers = () => (dispatch) =>
  UserApi.fetchUsers().then((users) => dispatch(fetchUsersAction(users)));
