import { createStore } from 'redux';
import { defaultState } from '../../server/default_state';

export const store = createStore(
    function reducer(state = defaultState, action) {
        return state;
    }
);