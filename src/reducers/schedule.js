import { ADD_SCHEDULE, GET_SCHEDULE, COMPLETE_SCHEDULE, GET_COMPLETED_SCHEDULE } from '../actions/types';

let inititalState = {
    scheduleData: [],
    completedScheduleData: []
}

export default function (state = inititalState, action) {
    switch (action.type) {
        case GET_SCHEDULE:
            const { scheduleData } = action;

            return {
                ...state,
                ...{
                  scheduleData: scheduleData
                }
            }
        case GET_COMPLETED_SCHEDULE:
            const { completedScheduleData } = action;

            return {
                ...state,
                ...{
                    completedScheduleData: completedScheduleData
                }
            }
        default:
            return state;
    }
}