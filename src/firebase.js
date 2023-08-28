import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGdwqeqO1xbpQ33gq8SXhvmv2VmzATvk4",
  authDomain: "linkedin-clone-yt-6b2ff.firebaseapp.com",
  projectId: "linkedin-clone-yt-6b2ff",
  storageBucket: "linkedin-clone-yt-6b2ff.appspot.com",
  messagingSenderId: "1007595953494",
  appId: "1:1007595953494:web:b628d1db31b6ee6e738af7",
  measurementId: "G-3VDBV4Z3XS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth};
