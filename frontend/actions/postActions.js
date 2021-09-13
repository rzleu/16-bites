/* eslint-disable implicit-arrow-linebreak */
import * as PostApiUtil from '../utils/postApi';
import { receiveErrors } from './errorActions';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  payload: posts,
});

export const fetchPosts = () => (dispatch) =>
  PostApiUtil.fetchPosts().then(
    (posts) => dispatch(receivePosts(posts)),
    (error) => dispatch(receiveErrors(error.responseJSON)),
  );
