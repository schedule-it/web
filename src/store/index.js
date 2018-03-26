import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers';
const store = {}
export default (initialState = {}) => {
    const store = createStore(reducer, initialState, compose(
        applyMiddleware(thunkMiddleware)
    ))

    return store
}