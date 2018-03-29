import { SIGNED_UP } from './types';
import { firebaseApp } from '../config/firebase';
import { eventFailed, eventSuccess, getUsername } from './common'

export const signUp = (email, password, username) => {

    return dispatch => {
        dispatch({
            type: SIGNED_UP
        })

        return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                return result.updateProfile({displayName: username});
                dispatch(eventSuccess(true, 'success sign up'));
                dispatch(getUsername(username));
            })
            .catch((err) => {
                // console.log(err);
                dispatch(eventFailed(true, err));
            })
    }
}