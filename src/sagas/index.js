import { all } from 'redux-saga/effects';

import errorSaga from './error.saga';
import userSaga from './user.saga';
import reportSaga from './report.saga';
import urlSaga from './url.saga';
import issueSaga from './issue.saga';

export default function* rootSaga() {
  yield all([
    errorSaga(),
    userSaga(),
    reportSaga(),
    urlSaga(),
    issueSaga()
  ])
}
