import { combineReducers } from 'redux'

import signUpReducer from './signUp';

const rootReducer = combineReducers({
    signUp: signUpReducer
});

export default rootReducer;

