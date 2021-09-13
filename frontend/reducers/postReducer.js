import { RECEIVE_POSTS } from '../actions/postActions';

const postReducer = (state = [], { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_POSTS:
      return payload;
    default:
      return state;
  }
};

export default postReducer;
