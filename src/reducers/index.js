import { combineReducers } from 'redux';
import * as entities from './_entities';
import * as pagers from './_pagers';

export {default as errorReducer} from './error.reducer';
export {default as queueReducer} from './queue.reducer';
export const entityReducers = combineReducers(entities);
export const pagerReducers = combineReducers(pagers);
