import { ADD_SCHEDULE, GET_SCHEDULE } from '../actions/types';

let inititalState = {
    subject: '',
    dateAndTime: '',
    description: '',
    anyDestination: false,
    from: '',
    to: '',
    scheduleData: []
}

export default function (state = inititalState, action) {
    switch (action.type) {
        case ADD_SCHEDULE:
            const { subject, dateAndTime, description, anyDestination, from, to } = action;
            return inititalState = {
                subject,
                dateAndTime,
                description,
                anyDestination,
                from,
                to
            }
        case GET_SCHEDULE:
            const { scheduleData } = action;
            return inititalState = {
                scheduleData
            }
        default:
            return state;
    }
}