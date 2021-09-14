import {
  RECEIVE_POSTS,
  RECEIVE_USER_POSTS,
  DELETE_POST,
} from '../actions/postActions';

const initialState = {
  allPosts: null,
  userPosts: null,
};

const postReducer = (state = initialState, { type, payload }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_POSTS:
      return { ...state, allPosts: payload };
    case RECEIVE_USER_POSTS:
      return { ...state, userPosts: payload };
    case DELETE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter(({ id }) => payload !== id),
        userPosts: state.userPosts.filter(({ id }) => payload !== id),
      };
    default:
      return state;
  }
};

export default postReducer;
