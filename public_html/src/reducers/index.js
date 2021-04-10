import { combineReducers } from 'redux';

import literatureReducer from '../ducks/literature-duck';

export default () =>
  combineReducers({
    literature: literatureReducer,
  });
