import { SIGNED_UP } from '../actions/types';

let initialState = {
    email: '',
    password: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNED_UP:
            const { email, password } = action;
            initialState = {
                email,
                password
            }
            return initialState;
    }
    return state;
}