import types from './types';

export default {
  fetchExpenses: () => ({ type: types.FETCH_EXPENSES }),
  fetchExpensesSuccess: expenses => ({ type: types.FETCH_EXPENSES_SUCCESS, expenses }),
  fetchExpensesError: error => ({ type: types.FETCH_EXPENSES_ERROR, error }),
  uploadFile: path => ({ type: types.UPLOAD_FILE, path }),
  uploadFileSuccess: url => ({ type: types.UPLOAD_FILE_SUCCESS, url }),
  uploadFileError: error => ({ type: types.UPLOAD_FILE_ERROR, error }),
};
