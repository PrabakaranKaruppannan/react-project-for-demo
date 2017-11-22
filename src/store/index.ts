import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers/index';
import StoreState from './storeState';

const middleware = applyMiddleware(thunk, logger);

export default createStore<StoreState>(reducers, middleware);