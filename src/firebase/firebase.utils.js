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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapshot = await userRef.get();
    
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;