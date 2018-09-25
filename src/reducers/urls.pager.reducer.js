import {
  URL_LIST_SUCCEED,
  URL_LIST_FAIL
} from '../actionTypes';

export default (state = {
  filters: { page: 0, code: '', url: '' },
  currentPage: []
}, action) => {
  switch (action.type) {
    case URL_LIST_SUCCEED:
      return { filters: action.payload.filters, currentPage: action.payload.urls };
    case URL_LIST_FAIL:
      return state;

    default:
      return state;
  }
}
