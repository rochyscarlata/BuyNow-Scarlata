import firebase from 'firebase/app';
import '@firebase/firestore'


const app = firebase.initializeApp({
    apiKey: "AIzaSyA0H2vBJU-skHAM6Vqo8qcCVT6o_hiFq9A",
    authDomain: "buynow-scarlata.firebaseapp.com",
    projectId: "buynow-scarlata",
    storageBucket: "buynow-scarlata.appspot.com",
    messagingSenderId: "552057893797",
    appId: "1:552057893797:web:1a7c77d269d6fc84abae4c",
    measurementId: "G-V2PP46RFBY"
})

export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app)
}