import HTTP from 'http-status';
import uuid from 'uuid/v4';

import * as actionTypes from './actionTypes';

export default (action) => {
  let id = uuid();
  let errorDetails = { id, message: "Oops! Something went wrong", expire: 5000 };

  if (action.error.message)
    if (action.error.message === "Failed to fetch")
      errorDetails = { ...errorDetails, message: "Failed to connect to the server" }

  // Default error message uses the
  // HTTP Status text and expires
  // 5 seconds after it appears
  if (action.error.code)
    errorDetails = { ...errorDetails, message: HTTP[action.error.code] }

  switch (action.type) {
    case actionTypes.USER_LOGIN_FAIL:
      if (action.error.code) {
        switch (action.error.code) {
          case HTTP.NOT_FOUND:
            errorDetails = { ...errorDetails, message: "Username or password incorrect" }
            break;
          case HTTP.BAD_REQUEST:
            errorDetails = { ...errorDetails, message: "Username or password incorrect" }
            break;
          default: break;
        }
      }
      break;
    case actionTypes.USER_CREATE_FAIL:
      if (action.error.code) {
        switch (action.error.code) {
          case HTTP.NOT_FOUND: break;
          default: break;
        }
      } else {
        errorDetails = { ...errorDetails, message: "Passwords did not match" }
      }
      break;
    default: break;
  }

  return errorDetails;
}
