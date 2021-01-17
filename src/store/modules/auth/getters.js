export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    // converts token string value to Boolean type true
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  }
};
