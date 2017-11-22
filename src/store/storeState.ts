import User from '../models/user';

export default interface StoreState{
    users: UsersStoreState;
}

export interface UsersStoreState {
    isFetching: boolean;
    items: User[];
}