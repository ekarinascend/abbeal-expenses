import types from './types';

export default {
  signIn: () => {
    console.log('yoooo');
    return { type: types.SIGN_IN };
  },
  signInSuccess: user => ({ type: types.SIGN_IN_SUCCESS, user }),
  signInError: error => ({ type: types.SIGN_IN_ERROR, error }),
};
