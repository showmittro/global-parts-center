
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfAtNzU5Bg3LK6gL087RoHuEpie19IgzE",
    authDomain: "global-parts-center.firebaseapp.com",
    projectId: "global-parts-center",
    storageBucket: "global-parts-center.appspot.com",
    messagingSenderId: "1007369323023",
    appId: "1:1007369323023:web:eea75c088ba56627eb597a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;