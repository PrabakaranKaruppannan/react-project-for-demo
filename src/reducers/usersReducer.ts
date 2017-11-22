import initialState from './initialState';
import { UsersStoreState } from '../store/storeState';
import Keys from '../actions/actionKeys';

export default function reducer(state: UsersStoreState = initialState.users, action: any) {
    switch (action.type) {
        case Keys.GET_USERS_SUCCESS:
            return onGetUsersSuccess(action);
        case Keys.GET_USERS_IN_PROGRESS:
            return onGetUsersInProgress(state);
        default :
            return state;
    }
}

function onGetUsersInProgress(currentState: any) {
    return {
        ...currentState,
        isFetching: true
    };
}

function onGetUsersSuccess(action: any) {
    return {
        isFetching: false,
        items: action.payload
    };
}
