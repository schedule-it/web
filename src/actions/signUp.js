import { SIGNED_UP } from './types';
import { firebaseApp } from '../config/firebase';
import { eventFailed, eventSuccess } from './common'

export const signUp = (email, password) => {

    return dispatch => {
        dispatch({
            type: SIGNED_UP
        })

        return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                dispatch(eventSuccess(true, 'success sign up'));
            })
            .catch((err) => {
                // console.log(err);
                dispatch(eventFailed(true, err));
            })
    }
}