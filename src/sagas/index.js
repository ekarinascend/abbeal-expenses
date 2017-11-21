import { Navigation } from 'react-native-navigation';
import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { GoogleSignin } from 'react-native-google-signin';
import { watchSignIn, watchSignOut } from './user';
import actions from '../reducers/user/actions';
import Config from './../config';

const showSignInScreen = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'SignInScreen',
      navigatorStyle: {
        navBarHidden: true,
      },
    },
  });
};

const startApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'DashboardScreen',
      title: 'ABBEAL',
      navigatorButtons: {
        leftButtons: [
          {
            id: 'avatar',
            component: 'NavbarAvatar',
          },
        ],
        rightButtons: [
          {
            id: 'logout-button',
            component: 'LogoutButton',
          },
        ],
      },
    },
  });
};

const setupGoogleSignIn = async function setupGoogleSignIn() {
  try {
    await GoogleSignin.hasPlayServices({ autoResolve: true });
    await GoogleSignin.configure({
      iosClientId: Config.iosClientId,
      webClientId: Config.iosClientId,
      offlineAccess: false,
    });

    const user = await GoogleSignin.currentUserAsync();
    return user;
  } catch (err) {
    // eslint-disable-next-line
    console.log('Google signin error', err.code, err.message);
    return null;
  }
};

const getSessionSaga = function* getSession() {
  const user = yield call(setupGoogleSignIn);
  yield put(actions.signInSuccess(user));
  return user;
};

const signInSaga = function* signInSaga() {
  yield call(showSignInScreen);
  return yield call(watchSignIn);
};

const appSaga = function* appSaga() {
  yield call(delay, 500);
  yield call(startApp);
  return yield call(watchSignOut);
};

export default function* sagas() {
  while (true) {
    let user = yield call(getSessionSaga);

    if (!user) {
      user = yield call(signInSaga);
    }

    console.log(user.photo);

    yield call(appSaga);
  }
}
