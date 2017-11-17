import types from './types';

export default {
  signIn: () => ({ type: types.SIGN_IN }),
  signInSuccess: user => ({ type: types.SIGN_IN_SUCCESS, user }),
  signInError: error => ({ type: types.SIGN_IN_ERROR, error }),
  signOut: () => ({ type: types.SIGN_OUT }),
};
