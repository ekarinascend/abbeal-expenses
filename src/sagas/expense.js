import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import types from '../reducers/expenses/types';
import actions from '../reducers/expenses/actions';
import { uploadFile } from '../google-api';

const seedExpenses = [
  {
    id: 1,
    type: 'food',
    date: new Date(),
    title: 'Restaurant italien',
    price_ttc: 25,
    vat: 5,
  },
  {
    id: 2,
    type: 'transport',
    date: new Date(),
    title: 'Carte TCL',
    price_ttc: 65,
    vat: 19,
  },
];

const getCurrentUser = state => state.user.currentUser;
const getCurrentUserToken = state => getCurrentUser(state).accessToken;

const uploadToDrive = function* uploadToDrive(action) {
  try {
    const token = yield select(getCurrentUserToken);
    const file = yield call(uploadFile, token, action.path);
    console.log(file);

    yield put(actions.uploadFileSuccess(file));
  } catch (error) {
    yield put(actions.uploadFileError(error));
  }
};

const fetchExpenses = function* fetchExpenses() {
  try {
    // TODO
    // fetch expenses from spreadsheet
    yield put(actions.fetchExpensesSuccess(seedExpenses));
  } catch (error) {
    yield put(actions.fetchExpensesError(error));
  }
};

const watchFetchExpenses = function* watchFetchExpenses() {
  yield takeLatest(types.FETCH_EXPENSES, fetchExpenses);
};

const watchUploadToDrive = function* watchUploadToDrive() {
  yield takeLatest(types.UPLOAD_FILE, uploadToDrive);
};

const rootSaga = function* rootSaga() {
  yield all([
    // TODO add more watchers
    call(watchFetchExpenses),
    call(watchUploadToDrive),
  ]);
};

export default rootSaga;
