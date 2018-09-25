import {
  QUEUE_ADD,
  QUEUE_REMOVE
} from '../actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case QUEUE_ADD:
      return [...state.filter(item => {return item.type !== action.payload.action.type}), action.payload.action];
    case QUEUE_REMOVE:
      return state.filter(item => {return item.qid !== action.payload.id});
    default:
      return state;
  }
}
