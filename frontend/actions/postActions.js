/* eslint-disable implicit-arrow-linebreak */
import * as PostApiUtil from '../utils/postApi';
import { receiveErrors } from './errorActions';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_USER_POSTS = 'RECEIVE_USER_POSTS';
export const DELETE_POST = 'DELETE_POST';

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  payload: posts,
});

const receiveUserPosts = (posts) => ({
  type: RECEIVE_USER_POSTS,
  payload: posts,
});

const deleteUserPost = (id) => ({
  type: DELETE_POST,
  payload: id,
});

export const fetchPosts = () => (dispatch) =>
  PostApiUtil.fetchPosts().then(
    (posts) => dispatch(receivePosts(posts)),
    (error) => dispatch(receiveErrors(error.responseJSON)),
  );

export const fetchUsersPosts = (id) => (dispatch) =>
  PostApiUtil.fetchUserPosts(id).then(
    ({ posts }) => dispatch(receiveUserPosts(posts)),
    (error) => dispatch(receiveErrors(error.responseJSON)),
  );

export const updatePost = (post) => (dispatch) =>
  PostApiUtil.updatePost(post).then((response) => dispatch(receivePosts(response)));

export const deletePost = (id) => (dispatch) =>
  PostApiUtil.deletePost(id).then(() => dispatch(deleteUserPost(id)));
