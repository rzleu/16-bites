export const signup = (user) =>
  $.ajax({
    url: '/api/users',
    method: 'post',
    data: {user},
  });

export const login = (user) =>
  $.ajax({
    url: '/api/session',
    method: 'post',
    data: {user},
  });

export const logout = () =>
  $.ajax({
    url: '/api/session',
    method: 'delete',
  });

export const checkEmailUniquess = (email) =>
  $.ajax({
    url: `/api/users/validate_email_uniqueness?email=${email}`,
    method: 'GET',
  });
