export const createPost = (post = {}) => {
  const data = getFormData(post);
  return $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: data,
    contentType: false,
    processData: false,
  });
};

export const updatePost = (post = {}) => {
  return $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'PATCH',
    data: { post },
  });
};

export const deletePost = (id) => {
  return $.ajax({
    url: `/api/posts/${id}`,
    method: 'DELETE',
  });
};

export const fetchPosts = () =>
  $.ajax({
    url: '/api/posts',
  });

export const fetchUserPosts = (id) =>
  $.ajax({
    url: `/api/users/${id}`,
  });

function getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(`post[${key}]`, object[key]));
  return formData;
}
