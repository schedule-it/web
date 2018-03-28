import { EVENT_FAILED, EVENT_SUCCESS, GET_TOKEN, GET_EMAIL } from './types';


export function eventFailed(error, errMessage) {
    return {
        type: EVENT_FAILED,
        error: error,
        errMessage: errMessage.message
    }
}

export function eventSuccess(success, successMessage) {
    return {
        type: EVENT_SUCCESS,
        success: success,
        successMessage: successMessage.message
    }
}

export function getToken(token) {
    return {
        type: GET_TOKEN,
        token: token
    }
}

export function getEmail(email) {
    return {
        type: GET_EMAIL,
        token: email
    }
}