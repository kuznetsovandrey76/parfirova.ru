import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux';

import literatureReducer from './ducks/literature-duck';

const rootReducer = combineReducers({
  literature: literatureReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
