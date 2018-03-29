import { SIGNED_UP } from './types';
import { firebaseApp } from '../config/firebase';
import { eventFailed, eventSuccess, getUsername } from './common'

export const signUp = (email, password, username) => {

    return dispatch => {
        return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                dispatch(eventSuccess(true, 'Success Sign Up! Please move to Login page'));
                dispatch(getUsername(username));
                return result.updateProfile({ displayName: username });
            })
            .catch((err) => {
                dispatch(eventFailed(true, err.message));
            })
    }

}