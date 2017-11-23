import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import types from '../reducers/expenses/types';
import actions from '../reducers/expenses/actions';
import GoogleApi from '../google';

const getCurrentUserToken = state => state.user.currentUser.accessToken;

const uploadToDrive = function* uploadToDrive(action) {
  try {
    const token = yield select(getCurrentUserToken);
    const api = new GoogleApi(token);
    const url = yield call(api.uploadFile, action.path);
    yield put(actions.uploadFileSuccess(url));
  } catch (error) {
    yield put(actions.uploadFileError(error));
  }
};

const watchUploadToDrive = function* watchUploadToDrive() {
  yield takeLatest(types.UPLOAD_FILE, uploadToDrive);
};

const rootSaga = function* rootSaga() {
  yield all([
    // TODO add more watchers
    call(watchUploadToDrive),
  ]);
};

export default rootSaga;
