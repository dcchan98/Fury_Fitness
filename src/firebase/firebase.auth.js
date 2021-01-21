import firebase from 'firebase/app'

import {
  auth,
  firestore
} from "./firebase"

export const signUp = (user, name, pass, rePass) => {
  if (pass != rePass) {
    alert("Passwords are different");
  }
  // sign up in firebase
  else {
    auth
      .createUserWithEmailAndPassword(user, pass)
      .catch((err) => alert(err.message));
  }
}

export const logIn = (user, pass) => {
  auth.signInWithEmailAndPassword(user, pass).catch((err) => alert(err.message));
}

export const logOut = () => {
  auth.signOut()
  alert("Signed out")
}

export const getCurrentStatus = ()=>{
  if (auth.user) {
    console.log(auth.user)
  // User is signed in.
} else {
  console.log("No user is signed in")
  // No user is signed in.
}
}



// google authentication 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle = ()=>{
  auth.signInWithPopup(provider)
}