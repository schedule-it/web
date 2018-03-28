import { ADD_SCHEDULE, GET_SCHEDULE, COMPLETE_SCHEDULE, GET_COMPLETED_SCHEDULE } from './types';
import { firebaseApp } from '../config/firebase';

function splitStringToPlus(string) {
    const result = string.replace(/\s+/g, '+');
    return result;
}

export const addSchedule = (subject, dateAndTime, description, anyDestination, from, to) => {
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

export const  getAllSchedule = (scheduleData) => {
    return dispatch => {
        dispatch({
            type: GET_SCHEDULE,
            scheduleData: scheduleData
        })
    }
}

export const getAllCompletedSchedule = (completedScheduleData) => {
    return dispatch => {
        dispatch({
            type: GET_COMPLETED_SCHEDULE,
            completedScheduleData: completedScheduleData
        })
    }
}

export const completeSchedule = (subject, dateAndTime, description, anyDestination, from, to, key) => {
    const origin = from;
    const destination = to;
    firebaseApp.database().ref('schedule').child(key).remove();
    firebaseApp.database().ref('completedSchedule')
        .push({ subject, dateAndTime, description, anyDestination, origin, destination })
}

export const deleteAllCompletedSchedule = () => {
    firebaseApp.database().ref('completedSchedule').set([])
}