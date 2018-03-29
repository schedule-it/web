import { EVENT_FAILED, EVENT_SUCCESS, GET_TOKEN, GET_USERNAME } from '../actions/types';

let initialState = {
    token: '',
    username: '',
    success: false,
    error: false,
    successMessage: '',
    errMessage: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case EVENT_FAILED:
            const { error, errMessage } = action;
            return {
                ...state,
                ...{
                    error: error,
                    errMessage: errMessage
                }
            }
            return initialState;
        case EVENT_SUCCESS:
            const { success, successMessage } = action;
            return {
                ...state,
                ...{
                    success: success,
                    successMessage: successMessage
                }
            }
            return initialState;
        case GET_TOKEN:
            const { token } = action;
            return {
                ...state,
                ...{
                    token: token
                }
            }
        case GET_USERNAME:
            const { username } = action;
            return {
                ...state,
                ...{
                    username: username
                }
            }
        default:
            return state;
    }
}