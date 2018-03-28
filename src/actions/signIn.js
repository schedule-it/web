import { SIGNED_IN } from './types';
import { firebaseApp } from '../config/firebase';
import { eventFailed, eventSuccess, getToken, getEmail } from './common';

export const signIn = (email, password) => {
    return dispatch => {
        dispatch({
            type: SIGNED_IN
        })

        return firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
                dispatch(getToken(result.refreshToken));
                dispatch(getEmail(result.email));
                localStorage.setItem('email', result.email);
            })
            .catch((err) => {
                console.log(err)
            })
    }
}