import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBBm_d9M85i2KIokpRIhksRojqZPkFLkM4",
    authDomain: "schedule-it-487f5.firebaseapp.com",
    databaseURL: "https://schedule-it-487f5.firebaseio.com",
    projectId: "schedule-it-487f5",
    storageBucket: "schedule-it-487f5.appspot.com",
    messagingSenderId: "88412294648"
};

export const firebaseApp = firebase.initializeApp(config);