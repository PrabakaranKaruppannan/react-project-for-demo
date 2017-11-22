import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers/index';
import StoreState from './storeState';

const middleware = applyMiddleware(thunk);

export default createStore<StoreState>(reducers, middleware);