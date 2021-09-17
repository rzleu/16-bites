import { FETCH_USERS } from '../actions/userActions';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return { ...payload };
    default:
      return state;
  }
};
