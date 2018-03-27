import { SIGNED_IN } from '../actions/types';

let initialState = {
    email: '',
    password: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNED_IN:
            const { email, password } = action;
            return initialState = {
                email,
                password
            }
            break
    }
    return state;
}