import {
  REPORT_LIST_SUCCEED,
  REPORT_LIST_FAIL
} from '../actionTypes';

export default (state = { filters: {}, currentPage: [] }, action) => {
  switch (action.type) {
    case REPORT_LIST_SUCCEED:
      return {
        ...state,
        currentPage: action.payload.reports
      };
    case REPORT_LIST_FAIL:
      return state;

    default:
      return state;
  }
}
