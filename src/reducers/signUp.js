import { SIGNED_UP } from '../actions/types';

let initialState = {
    email: '',
    password: '',
    username: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNED_UP:
            const { email, password, username } = action;
            initialState = {
                email,
                password,
                username
            }
            return initialState;
            break;
    }
    return state;
}