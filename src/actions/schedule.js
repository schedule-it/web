import { ADD_SCHEDULE, GET_SCHEDULE } from './types';
import { firebaseApp } from '../config/firebase';

function splitStringToPlus(string) {
    const result = string.replace(/\s+/g, '+');
    return result;
}

export const addSchedule = (subject, dateAndTime, description, anyDestination, from, to, email) => {
    localStorage.getItem('email');
    return dispatch => {
        dispatch({
            type: ADD_SCHEDULE
        })
        const origin = splitStringToPlus(from);
        const destination = splitStringToPlus(to);
        firebaseApp.database().ref('schedule')
            .push({ subject, dateAndTime, description, anyDestination, origin, destination })
    }
}

export const getAllSchedule = (scheduleData) => {
    return dispatch => {
        dispatch({
            type: GET_SCHEDULE,
            scheduleData: scheduleData
        })
    }
}