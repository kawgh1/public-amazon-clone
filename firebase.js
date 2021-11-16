import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "asdfasdfasdfasdfasdfasdf",

    authDomain: "amzn-clone-asdfsadf.firebaseapp.com",

    projectId: "amzn-clone-7f09e",

    storageBucket: "amzn-clone-7f09e.appspot.com",

    messagingSenderId: "asdfasdf",

    appId: "1:12312aSDFa45a7a582e",
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;
