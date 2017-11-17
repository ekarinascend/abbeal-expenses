const initialState = {};

const SIGN_IN = 'SIGN_IN';

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SIGN_IN:
      // TODO
      // modify state here
      return state;
    default:
      return state;
  }
};

export default reducer;
