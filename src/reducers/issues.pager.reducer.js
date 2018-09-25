import {
  ISSUE_LIST_SUCCEED,
  ISSUE_LIST_FAIL
} from '../actionTypes';

export default (state = {
  filters: { page: 0, type: 0, code: '' },
  currentPage: []
}, action) => {
  switch (action.type) {
    case ISSUE_LIST_SUCCEED:
      return {
        filters: action.payload.filters,
        currentPage: action.payload.issues
      };
    case ISSUE_LIST_FAIL:
      return state;

    default:
      return state;
  }
}
