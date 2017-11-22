import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import StoreState from '../store/storeState';

export default combineReducers<StoreState>({
    users: usersReducer
});