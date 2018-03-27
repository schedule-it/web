import { EVENT_FAILED, EVENT_SUCCESS, GET_TOKEN } from '../actions/types';

let initialState = {
    token: '',
    success: false,
    error: false,
    successMessage: '',
    errMessage: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case EVENT_FAILED:
            const { error, errMessage } = action;
            initialState = {
                error,
                errMessage
            }
            return initialState;
            break;
        case EVENT_SUCCESS:
            const { success, successMessage } = action;
            initialState = {
                success,
                successMessage
            }
            return initialState;
            break;
        case GET_TOKEN:
            const { token } = action;
            initialState = {
                token
            }
            return initialState;
            break;
    }
    return state;
}