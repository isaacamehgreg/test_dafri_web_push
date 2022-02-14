import types from '../../types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.TEMPORARY_SELECTED_TRADE:
      return action.payload;
    case types.LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};
