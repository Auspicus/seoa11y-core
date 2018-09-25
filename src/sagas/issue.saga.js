import { call, put, takeLatest } from 'redux-saga/effects';

import {
  ISSUE_REQUEST,
  ISSUE_LIST
} from '../actionTypes';
import { Issue } from '../api';

function* issueRequest (action) {
  try {
    const requestedIssue = yield call(Issue.get, action.payload.id, action.payload.token);
    yield put(action.meta.succeed(requestedIssue, action.meta.qid));
  } catch (error) {
    yield put(action.meta.fail(error, action.meta.qid));
  }
}

function* issueList (action) {
  try {
    const requestedIssues = yield call(Issue.list, action.payload.filters, action.payload.token);
    yield put(action.meta.succeed(requestedIssues, action.payload.filters, action.meta.qid));
  } catch (error) {
    yield put(action.meta.fail(error, action.meta.qid));
  }
}

export default function* urlSaga() {
  yield takeLatest(ISSUE_REQUEST, issueRequest);
  yield takeLatest(ISSUE_LIST, issueList);
}
