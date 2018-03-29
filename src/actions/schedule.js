import { ADD_SCHEDULE, GET_SCHEDULE, COMPLETE_SCHEDULE, GET_COMPLETED_SCHEDULE } from './types';
import { firebaseApp } from '../config/firebase';

function splitStringToPlus(string) {
    const result = string.replace(/\s+/g, '+');
    return result;
}

function pushSchedule(scheduleData) {
    return {
        type: GET_SCHEDULE,
        scheduleData: scheduleData
    }
}

function pushCompletedSchedule(completedScheduleData) {
    return {
        type: GET_COMPLETED_SCHEDULE,
        completedScheduleData: completedScheduleData
    }
}

export const addSchedule = (subject, dateAndTime, description, anyDestination, from, to, username) => {
    return dispatch => {
        dispatch({
            type: ADD_SCHEDULE
        })
        const origin = splitStringToPlus(from);
        const destination = splitStringToPlus(to);
        firebaseApp.database().ref(`schedule/${username}`)
            .push({ subject, dateAndTime, description, anyDestination, origin, destination })
    }
}

export const getAllSchedule = (username) => {
    return dispatch => {
        firebaseApp.database().ref(`schedule/${username}`).on("value", snap => {
            let schedules = [];
            snap.forEach(schedule => {
                const { subject,
                    dateAndTime,
                    description,
                    anyDestination,
                    origin,
                    destination } = schedule.val()
                const serverKey = schedule.key;
                schedules.push({
                    serverKey,
                    subject,
                    dateAndTime,
                    description,
                    anyDestination,
                    origin,
                    destination,
                    username
                })

            })
            dispatch(pushSchedule(schedules));
        })
    }
}

export const getAllCompletedSchedule = (username) => {
    return dispatch => {
        firebaseApp.database().ref(`completedSchedule/${username}`).on("value", snap => {
            let completedSchedules = [];
            snap.forEach(completedSchedule => {
                const { subject,
                    dateAndTime,
                    description,
                    anyDestination,
                    origin,
                    destination } = completedSchedule.val()
                const serverKey = completedSchedule.key;
                completedSchedules.push({
                    serverKey,
                    subject,
                    dateAndTime,
                    description,
                    anyDestination,
                    origin,
                    destination
                })

            })
            dispatch(pushCompletedSchedule(completedSchedules));
        })
    }
}

export const completeSchedule = (subject, dateAndTime, description, anyDestination, from, to, key, username) => {
    const origin = from;
    const destination = to;
    firebaseApp.database().ref(`schedule/${username}`).child(key).remove();
    firebaseApp.database().ref(`completedSchedule/${username}`)
        .push({ subject, dateAndTime, description, anyDestination, origin, destination })
}

export const deleteAllCompletedSchedule = (username) => {
    firebaseApp.database().ref(`completedSchedule/${username}`).set([])
}