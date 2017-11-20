import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GoogleSignin } from 'react-native-google-signin';
import types from '../reducers/user/types';
import actions from '../reducers/user/actions';

const signIn = function* signIn() {
  try {
    const user = yield call([GoogleSignin, GoogleSignin.signIn]);
    yield put(actions.signInSuccess(user));
  } catch (error) {
    yield put(actions.signInError(error));
  }
};

const signOut = function* signOut() {
  yield call([GoogleSignin, GoogleSignin.revokeAccess, GoogleSignin.signOut]);
};

const watchSignIn = function* signInDriver() {
  yield takeLatest(types.SIGN_IN, signIn);
};

const watchSignOut = function* signOutDriver() {
  yield takeLatest(types.SIGN_OUT, signOut);
};

const rootSaga = function* rootSaga() {
  yield all([
    call(watchSignIn),
    call(watchSignOut),
  ]);
};

export default rootSaga;
