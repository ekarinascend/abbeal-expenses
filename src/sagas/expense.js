import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import types from '../reducers/expenses/types';
import actions from '../reducers/expenses/actions';
import { uploadFile, ocrFile } from '../google-api';
import { readFileAsBase64 } from '../utils';

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
const getPicture = state => state.expenses.picture;

const fileToBase64 = function* fileToBase64(path) {
  const base64 = yield call(readFileAsBase64, path);
  return base64;
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

const newPicture = function* newPicture(action) {
  const { path } = action;

  const base64 = yield call(fileToBase64, path);
  yield put(actions.setPictureBase64(base64));
};

const uploadToDrive = function* uploadToDrive(token, picture) {
  try {
    yield put(actions.uploadFile());
    const file = yield call(uploadFile, token, picture);
    const ocr = yield call(ocrFile, picture.base64);
    console.log(ocr);

    // console.log(ocr.responses[0].fullTextAnnotation)
    // /tva?\s+([0-9]+(\.|,[0-9]{1,2})?)/

    yield put(actions.uploadFileSuccess(file.id));
  } catch (error) {
    yield put(actions.uploadFileError(error));
  }
};

const confirmPicture = function* confirmPicture() {
  const token = yield select(getCurrentUserToken);
  const picture = yield select(getPicture);
  yield call(uploadToDrive, token, picture);
};

const watchFetchExpenses = function* watchFetchExpenses() {
  yield takeLatest(types.FETCH_EXPENSES, fetchExpenses);
};

const watchNewPicture = function* watchNewPicture() {
  yield takeLatest(types.NEW_PICTURE, newPicture);
};

const watchConfirmPicture = function* watchConfirmPicture() {
  yield takeLatest(types.CONFIRM_PICTURE, confirmPicture);
};

const rootSaga = function* rootSaga() {
  yield all([
    call(watchFetchExpenses),
    call(watchNewPicture),
    call(watchConfirmPicture),
  ]);
};

export default rootSaga;
