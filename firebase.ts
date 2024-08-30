// Import the functions you need from the SDKs you need
// noinspection TypeScriptValidateTypes

import { initializeApp , getApps} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCv4YWNPvRM1wo2P30yRC9FA1AjyXyU2Ik",
    authDomain: "dialog-pdf-bc15a.firebaseapp.com",
    projectId: "dialog-pdf-bc15a",
    storageBucket: "dialog-pdf-bc15a.appspot.com",
    messagingSenderId: "448399978207",
    appId: "1:448399978207:web:e034e7af30b6eab9d5436a",
    measurementId: "G-RW25GRWR2C"
};
// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export {db,storage};