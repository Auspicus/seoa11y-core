import { call, put, takeLatest } from 'redux-saga/effects';

import {
  USER_CREATE,
  USER_LOGIN,
  USER_LOGOUT
} from '../actionTypes';
import { User } from '../api';
import { ACCESS_TOKEN_KEY } from '../constants';

function* userCreate (action) {
  try {
    if (action.payload.user.password !== action.payload.user.confirmPassword) throw Error('Passwords did not match');
    const createdUser = yield call(User.create, action.payload.user);
    yield put(action.meta.succeed(createdUser, action.meta.qid));
  } catch (error) {
    yield put(action.meta.fail(error, action.meta.qid));
  }
}

function* userLogin (action) {
  try {
    let token = localStorage.getItem(ACCESS_TOKEN_KEY);
    const loggedInUser = token
      ? yield call(User.authenticate, localStorage.getItem(ACCESS_TOKEN_KEY))
      : yield call(User.login, action.payload.user);
    if (loggedInUser.token) {
      localStorage.setItem(ACCESS_TOKEN_KEY, loggedInUser.token);
      token = loggedInUser.token;
    }
    if (token) {
      loggedInUser.token = token;
    }
    loggedInUser.token = token;
    yield put(action.meta.succeed(loggedInUser, action.meta.qid));
  } catch (error) {
    yield put(action.meta.fail(error, action.meta.qid));
  }
}

function* userLogout (action) {
  try {
    yield call(User.logout, action.payload.user);
    yield put(action.meta.succeed(action.meta.qid));
  } catch (error) {
    yield put(action.meta.fail(error, action.meta.qid));
  }
}

export default function* userSaga() {
  yield takeLatest(USER_CREATE, userCreate);
  yield takeLatest(USER_LOGIN, userLogin);
  yield takeLatest(USER_LOGOUT, userLogout);
}
