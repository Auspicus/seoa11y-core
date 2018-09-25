import { call, put, takeLatest } from 'redux-saga/effects';

import {
  URL_REQUEST,
  URL_LIST
} from '../actionTypes';
import { Url } from '../api';

function* urlRequest (action) {
  try {
    const requestedUrl = yield call(Url.get, action.payload.id, action.payload.token);
    yield put(action.meta.succeed(requestedUrl, action.meta.qid));
  } catch (error) {
    yield put(action.meta.fail(error, action.meta.qid));
  }
}

function* urlList (action) {
  try {
    const requestedUrls = yield call(Url.list, action.payload.filters, action.payload.token);
    yield put(action.meta.succeed(requestedUrls, action.payload.filters, action.meta.qid));
  } catch (error) {
    yield put(action.meta.fail(error, action.meta.qid));
  }
}

export default function* urlSaga() {
  yield takeLatest(URL_REQUEST, urlRequest);
  yield takeLatest(URL_LIST, urlList);
}
