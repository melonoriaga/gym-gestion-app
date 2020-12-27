import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkKbVD4IHNbWbhnLchpB7dZRxEL1Cps2Y",
    authDomain: "gym-gestion-prod.firebaseapp.com",
    databaseURL: "https://gym-gestion-prod.firebaseio.com",
    projectId: "gym-gestion-prod",
    storageBucket: "gym-gestion-prod.appspot.com",
    messagingSenderId: "896914971162",
    appId: "1:896914971162:web:4c3290c9e8f48c5bcfcfa3"
};

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);

export { firebase };
