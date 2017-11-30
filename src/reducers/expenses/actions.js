import types from './types';

export default {
  fetchExpenses: () => ({ type: types.FETCH_EXPENSES }),
  fetchExpensesSuccess: expenses => ({ type: types.FETCH_EXPENSES_SUCCESS, expenses }),
  fetchExpensesError: error => ({ type: types.FETCH_EXPENSES_ERROR, error }),
  uploadFile: () => ({ type: types.UPLOAD_FILE }),
  uploadFileSuccess: id => ({ type: types.UPLOAD_FILE_SUCCESS, id }),
  uploadFileError: error => ({ type: types.UPLOAD_FILE_ERROR, error }),
  newPicture: path => ({ type: types.NEW_PICTURE, path }),
  setPictureBase64: base64 => ({ type: types.SET_PICTURE_BASE64, base64 }),
  dismissPicture: () => ({ type: types.DISMISS_PICTURE }),
  confirmPicture: () => ({ type: types.CONFIRM_PICTURE }),
};
