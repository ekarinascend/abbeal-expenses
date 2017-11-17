import types from './types';

const initialState = {
  currentUser: null,
};

export default (state = initialState, action) => {
  const { type } = action;
  console.log('in reducer !!');
  switch (type) {
    case types.SIGN_IN:
      console.log('trigger sign in');
      // TODO
      // modify state here
      return state;
    case types.SIGN_IN_SUCCESS: {
      console.log('sign in success');
      return state;
    }
    case types.SIGN_IN_ERROR: {
      console.log('sign in error');
      return state;
    }
    default:
      return state;
  }
};
