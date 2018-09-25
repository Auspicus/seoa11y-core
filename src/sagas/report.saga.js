import { call, put, takeLatest } from 'redux-saga/effects';

import {
  REPORT_CREATE_FROM_SITEMAP,
  REPORT_CREATE_FROM_LIST,
  REPORT_REQUEST,
  REPORT_LIST
} from '../actionTypes';
import { Report } from '../api';

function* reportCreateFromSitemap (action) {
  try {
    const createdReport = yield call(Report.createFromSitemap, action.payload.url, action.payload.token);
    yield put(action.meta.succeed(createdReport, action.meta.qid));
  } catch (error) {
    yield put(action.meta.fail(error, action.meta.qid));
  }
}

function* reportCreateFromList (action) {
  try {
    const createdReport = yield call(Report.createFromPage, action.payload.urls, action.payload.token);
    yield put(action.meta.succeed(createdReport, action.meta.qid));
  } catch (error) {
    yield put(action.meta.fail(error, action.meta.qid));
  }
}

function* reportRequest (action) {
  try {
    const requestedReport = yield call(Report.get, action.payload.id, action.payload.token);
    yield put(action.meta.succeed(requestedReport, action.meta.qid));
  } catch (error) {
    yield put(action.meta.fail(error, action.meta.qid));
  }
}

function* reportList (action) {
  try {
    const requestedReports = yield call(Report.list, action.payload.token);
    yield put(action.meta.succeed(requestedReports, action.meta.qid));
  } catch (error) {
    yield put(action.meta.fail(error, action.meta.qid));
  }
}

export default function* reportSaga() {
  yield takeLatest(REPORT_CREATE_FROM_SITEMAP, reportCreateFromSitemap);
  yield takeLatest(REPORT_CREATE_FROM_LIST, reportCreateFromList);
  yield takeLatest(REPORT_REQUEST, reportRequest);
  yield takeLatest(REPORT_LIST, reportList);
}
