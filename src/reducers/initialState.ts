import StoreState from '../store/storeState';

const initialState: StoreState = {
    users: {
        isFetching: false,
        items: []
    }
};

export default initialState;