import { ADD_SCHEDULE } from '../actions/types';

let inititalState = {
    subject: '',
    dateAndTime: '',
    description: '',
    anyDestination: false,
    from: '',
    to: ''
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
        default:
            return state;
    }
}