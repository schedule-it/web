import { SIGNED_IN } from './types';
import { firebaseApp } from '../config/firebase';
import { getToken, getUsername } from './common';

export const signIn = (email, password) => {
    return dispatch => {
        dispatch({
            type: SIGNED_IN
        })

        return firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                dispatch(getToken(result.refreshToken));
                dispatch(getUsername(result.displayName));
            })
            .catch((err) => {
                console.log(err)
            })
    }
}