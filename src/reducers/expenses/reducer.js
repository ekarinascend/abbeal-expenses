import types from './types';

const initialState = {
  expenses: [],
  isLoading: false,
  error: null,
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
    default:
      return state;
  }
};
