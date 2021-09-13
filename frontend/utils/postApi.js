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

export const fetchPosts = () =>
  $.ajax({
    url: '/api/posts',
  });

function getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(`post[${key}]`, object[key]));
  return formData;
}
