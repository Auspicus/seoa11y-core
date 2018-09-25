import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import getError from '../errors';
import { errorAdd, errorRemove } from '../actions';

function* handleError(action) {
  if (action.error) {
    let detail = getError(action);
    yield put(errorAdd(detail));
    if (detail.expire > 0) {
      yield delay(detail.expire);
      yield put(errorRemove(detail.id));
    }
  }
}

export default function* errorSaga() {
  yield takeEvery('*', handleError);
}
