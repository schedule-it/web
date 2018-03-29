import { EVENT_FAILED, EVENT_SUCCESS, GET_TOKEN, GET_USERNAME } from './types';


export function eventFailed(error, errMessage) {
    return {
        type: EVENT_FAILED,
        error: error,
        errMessage: errMessage
    }
}

export function eventSuccess(success, successMessage) {
    return {
        type: EVENT_SUCCESS,
        success: success,
        successMessage: successMessage
    }
}

export function getToken(token) {
    return {
        type: GET_TOKEN,
        token: token
    }
}

export function getUsername(username) {
    return {
        type: GET_USERNAME,
        username: username
    }
}