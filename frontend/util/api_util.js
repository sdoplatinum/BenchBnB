export const createUser = (user) => {
  return $.ajax({
      method: 'POST',
      url: '/api/users',
      data: { user:user }
  });
};

export const loginUser = (user) => {
  debugger
  return $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user :user }
   });
};

export const logoutUser = () => {
  debugger
  return $.ajax({
       method: 'DELETE',
       url: '/api/session'
  });
};
