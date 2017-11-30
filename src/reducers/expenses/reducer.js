import types from './types';

const initialState = {
  expenses: [],
  isLoading: false,
  isUploading: false,
  error: null,
  picture: {
    path: null,
    base64: null,
  },
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.FETCH_EXPENSES:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_EXPENSES_SUCCESS:
      return {
        ...state,
        expenses: action.expenses,
        isLoading: false,
      };
    case types.FETCH_EXPENSES_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case types.UPLOAD_FILE:
      return {
        ...state,
        isUploading: true,
      };
    case types.UPLOAD_FILE_SUCCESS:
      // TODO Do something with action.id
      return {
        ...state,
        isUploading: false,
      };
    case types.UPLOAD_FILE_ERROR:
      return {
        ...state,
        isUploading: false,
        error: action.error,
      };
    case types.NEW_PICTURE:
      return {
        ...state,
        picture: {
          ...state.picture,
          path: action.path,
        },
      };
    case types.SET_PICTURE_BASE64:
      return {
        ...state,
        picture: {
          ...state.picture,
          base64: action.base64,
        },
      };
    case types.DISMISS_PICTURE:
      return {
        ...state,
        picture: initialState.picture,
      };
    default:
      return state;
  }
};
