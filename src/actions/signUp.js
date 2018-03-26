import { SIGNED_UP } from './types';
import { firebaseApp } from '../config/firebase';

export const signUp = (email, password) => {
    return dispatch => {
        dispatch({
            type: SIGNED_UP
        })

        return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log('result', result);
            })
            .catch(error => {
                console.log('error', error);
            })
    }
}