import {
  USER_CREATE_SUCCEED,
  USER_LOGIN_SUCCEED,
  USER_LOGOUT_SUCCEED,
  USER_CREATE_FAIL,
  USER_LOGIN_FAIL,
  USER_LOGOUT_FAIL
} from '../actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_CREATE_SUCCEED:
      return action.payload.user;
    case USER_CREATE_FAIL:
      return state;

    case USER_LOGIN_SUCCEED:
      return action.payload.user;
    case USER_LOGIN_FAIL:
      return state;

    case USER_LOGOUT_SUCCEED:
      return {};
    case USER_LOGOUT_FAIL:
      return state;

    default:
      return state;
  }
}
