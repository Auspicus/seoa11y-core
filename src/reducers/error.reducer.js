import {
  ERROR_ADD,
  ERROR_REMOVE
} from '../actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ERROR_ADD:
      return [...state, action.payload.error];
    case ERROR_REMOVE:
      return state.filter(item => {return item.id !== action.payload.id});
    default:
      return state;
  }
}
