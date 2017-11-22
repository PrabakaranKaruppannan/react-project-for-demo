import { Dispatch } from 'redux';
import StoreState from '../store/storeState';
import User from '../models/user';
import keys from './actionKeys';
import {
    getUsers as getUsersFromApi
} from '../api/userApi';

export function getUsersAction(): (
    dispatch: Dispatch<StoreState>,
    getState: () => StoreState
) => Promise<void> {
    return async (
        dispatch: Dispatch<StoreState>
    ) => {
        await dispatch(getUsers());
    };
}

function getUsers(): (dispatch: Dispatch<StoreState>) => Promise<void> {
    return async (dispatch: Dispatch<StoreState>) => {
        try {
            const users: User[] = await getUsersFromApi();

            dispatch(getUsersSuccess(users));
        } catch (err) {
            dispatch(getUsersFail(err));
        }
    };
}

function getUsersSuccess(userItems: User[]) {
    return {
        payload: userItems,
        type: keys.GET_USERS_SUCCESS
    };
}

function getUsersFail(error: Error) {
    return {
        payload: {
            error
        },
        type: keys.GET_USERS_FAIL
    };
}