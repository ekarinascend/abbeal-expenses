const initialState = {};

const FETCH_EXPENSES = 'FETCH_EXPENSES';

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FETCH_EXPENSES:
      // TODO
      // modify state here
      return state;
    default:
      return state;
  }
};

export default reducer;
