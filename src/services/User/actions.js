export const userChange = (loggedIn, user) => {
  return {
    type: "USER_CHANGE",
    payload: { loggedIn, user }
  };
};
