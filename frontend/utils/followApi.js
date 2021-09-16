export const createFollow = ({ follower_id, followee_id }) =>
  $.ajax({
    url: '/api/follows',
    method: 'POST',
    data: {
      follow: { follower_id, followee_id },
    },
  });

export const deleteFollow = (obj) =>
  $.ajax({
    url: '/api/follows/delete',
    method: 'DELETE',
    data: obj,
  });

export const showFollows = (user_id) =>
  $.ajax({
    url: `/api/follows/${user_id}`,
  });
