import { queueAdd, queueRemove } from './actions';
import uuid from 'uuid/v4';

const queueMiddleware = store => next => action => {
  if (action.meta) {
    if (action.meta.queue) {
      let { meta, ...realAction } = action;
      let qid = uuid();
      delete meta.queue;
      store.dispatch(queueAdd({
        qid,
        ...realAction,
        meta
      }));
      meta.qid = qid;
      return next({ ...realAction, meta });
    }
    else
    if (action.meta.qid) {
      let { meta, ...realAction } = action;
      store.dispatch(queueRemove(meta.qid));
      delete meta.qid;
      return next({ ...realAction, meta });
    }
    return next(action);
  }
  return next(action);
}

export default queueMiddleware;
