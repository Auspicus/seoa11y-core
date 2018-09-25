import {
  REPORT_CREATE_FROM_SITEMAP_SUCCEED,
  REPORT_CREATE_FROM_LIST_SUCCEED,
  REPORT_REQUEST_SUCCEED,
  REPORT_REQUEST_FAIL,
  REPORT_CREATE_FROM_SITEMAP_FAIL,
  REPORT_CREATE_FROM_LIST_FAIL
} from '../actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case REPORT_CREATE_FROM_SITEMAP_SUCCEED:
      return action.payload.report;
    case REPORT_CREATE_FROM_SITEMAP_FAIL:
      return state;

    case REPORT_CREATE_FROM_LIST_SUCCEED:
      return action.payload.report;
    case REPORT_CREATE_FROM_LIST_FAIL:
      return state;

    case REPORT_REQUEST_SUCCEED:
      return action.payload.report;
    case REPORT_REQUEST_FAIL:
      return state;

    default:
      return state;
  }
}
