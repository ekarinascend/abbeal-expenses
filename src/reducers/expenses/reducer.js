import types from './types';

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

const initialState = {
  expenses: seedExpenses,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case types.FETCH_EXPENSES:
      return state;
    case types.FETCH_EXPENSES_SUCCESS:
      return state;
    case types.FETCH_EXPENSES_ERROR:
      return state;
    default:
      return state;
  }
};
