import { combineReducers } from 'redux'

import signUpReducer from './signUp';
import signInReducer from './signIn';
import commonReducer from './common';

const rootReducer = combineReducers({
    signUp: signUpReducer,
    common: commonReducer,
    signIn: signInReducer
});

export default rootReducer;

