import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDyZMLOb4b9bAIRhOnH2trXbqXcUbnDhqE",
    authDomain: "crwn-db-afb14.firebaseapp.com",
    projectId: "crwn-db-afb14",
    storageBucket: "crwn-db-afb14.appspot.com",
    messagingSenderId: "913534233081",
    appId: "1:913534233081:web:db4d95585ed3c794db3528"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;