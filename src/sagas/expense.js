import {call, put, takeLatest, all, select} from 'redux-saga/effects';
import types from '../reducers/expenses/types';
import actions from '../reducers/expenses/actions';
import GoogleApi from '../google';
import googleDriveService from '../services/GoogleDriveService';

const getCurrentUser = state => state.user.currentUser;
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

const fetchExpenses = function* fetchExpenses(action) {
    try {
        googleDriveService.user = yield select(getCurrentUser);
        let expenses = yield call(googleDriveService.getContent);
        // todo : trigger fetchExpensesSuccess action with a parsed response
        // todo : remove next expenses affectation
        expenses = [
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

        yield put(actions.fetchExpensesSuccess(expenses));
    } catch (error) {
        yield put(actions.fetchExpensesError(error));
    }
}
const watchUploadToDrive = function* watchUploadToDrive() {
    yield takeLatest(types.UPLOAD_FILE, uploadToDrive);
};


const watchFetchExpenses = function* watchFetchExpenses() {
    yield takeLatest(types.FETCH_EXPENSES, fetchExpenses);
}

const rootSaga = function* rootSaga() {
    yield all([
        // TODO add more watchers
        call(watchFetchExpenses),
        call(watchUploadToDrive),
    ]);
};

export default rootSaga;
