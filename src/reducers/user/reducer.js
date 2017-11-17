import types from './types';

const initialState = {
  currentUser: null,
  signInError: null,
};

export default (state = initialState, action) => {
  const { type, user, error } = action;
  switch (type) {
    case types.SIGN_IN_SUCCESS:
      return { ...state, currentUser: user };
    case types.SIGN_IN_ERROR:
      return { ...state, signInError: error };
    case types.SIGN_OUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
