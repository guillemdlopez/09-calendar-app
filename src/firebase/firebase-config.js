import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signInWithEmailAndPassword, GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { errorMessage } from "../helpers/user-messages";
import { login, logout } from "../actions/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMnH_V9ZHx0wVUIpHb8O0e1XX3T_z2qmA",
  authDomain: "calendlify.firebaseapp.com",
  projectId: "calendlify",
  storageBucket: "calendlify.appspot.com",
  messagingSenderId: "853341837682",
  appId: "1:853341837682:web:6eb4e0be192f4949e865eb",
  measurementId: "G-03G6VK7DL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
const auth = getAuth();


export const createUser = (name, email, password, photo) => {
  console.log(email, password);

  return (dispatch) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
          console.log(user);
          const {email, uid } = user
          updateProfile(auth.currentUser, { displayName: name, photo })
          dispatch(login(uid, name, email))
      })
      .catch((err) => {
          errorMessage("Something went wrong...", err.message)
      })        
  }
}

export const loginWithGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const { user } = result;
      const { displayName, email, uid } = user;
      dispatch(login(uid, displayName, email))
  
    }).catch((err) => {
      errorMessage("Something went wrong...", err.message)
    });
  }
}

export const loginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      const { displayName, email, uid} = user;
      dispatch(login(uid, displayName, email))
    }).catch((err) => {
      errorMessage("Something went wrong...", err.message)
    })
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await auth.signOut()

    dispatch(logout());
  };
};