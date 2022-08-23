import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import RootReducer from './RootReducer';

const Store = createStore(
    RootReducer,
  applyMiddleware(logger, thunk)
);

export default Store;