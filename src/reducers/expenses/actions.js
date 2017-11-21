import types from './types';

export default {
  fetchExpenses: () => ({ type: types.FETCH_EXPENSES }),
  fetchExpensesSuccess: expenses => ({ type: types.FETCH_EXPENSES_SUCCESS, expenses }),
  fetchExpensesError: error => ({ type: types.FETCH_EXPENSES_ERROR, error }),
};
