import {take, call, put} from 'redux-saga/effects';
import {GoogleSignin} from 'react-native-google-signin';
import types from '../reducers/user/types';
import actions from '../reducers/user/actions';
import GoogleUser from "../model/GoogleUser";


const signIn = function* signIn() {
    try {
        const user = yield call([GoogleSignin, GoogleSignin.signIn]);
        const googleUser = new GoogleUser(user);
        return yield put(actions.signInSuccess(googleUser));
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
        console.log(user);
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
