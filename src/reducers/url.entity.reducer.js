import {
  URL_REQUEST_SUCCEED,
  URL_REQUEST_FAIL
} from '../actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case URL_REQUEST_SUCCEED:
      return action.payload.url;
    case URL_REQUEST_FAIL:
      return state;

    default:
      return state;
  }
}
