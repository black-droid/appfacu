import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA02fhVXRVEQE5hHbVeKxdnCOwIWweEUkY",
    authDomain: "**************************",
    databaseURL: "https://equalitycare-appmeto.firebaseio.com",
    projectId: "equalitycare-appmeto",
    storageBucket: "equalitycare-appmeto.appspot.com",
    messagingSenderId: "211394351001"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();