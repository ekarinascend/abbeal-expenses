import { take, call, put } from 'redux-saga/effects';
import { GoogleSignin } from 'react-native-google-signin';
import types from '../reducers/user/types';
import actions from '../reducers/user/actions';

const signIn = function* signIn() {
  try {
    const user = yield call([GoogleSignin, GoogleSignin.signIn]);
    return yield put(actions.signInSuccess(user));
  } catch (error) {
    yield put(actions.signInError(error));
    return null;
  }
};

const signOut = function* signOut() {
  yield call([GoogleSignin, GoogleSignin.revokeAccess, GoogleSignin.signOut]);
};

const watchSignIn = function* signInDriver() {
  while (true) {
    yield take(types.SIGN_IN);
    const user = yield call(signIn);
    if (user) return user;
  }
};

const watchSignOut = function* signOutDriver() {
  while (true) {
    yield take(types.SIGN_OUT);
    return yield call(signOut);
  }
};

export {
  watchSignIn,
  watchSignOut,
};
