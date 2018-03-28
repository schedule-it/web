import { combineReducers } from 'redux'

import signUpReducer from './signUp';
import signInReducer from './signIn';
import commonReducer from './common';
import scheduleReducer from './schedule';

const rootReducer = combineReducers({
    signUp: signUpReducer,
    common: commonReducer,
    signIn: signInReducer,
    schedule: scheduleReducer
});

export default rootReducer;

