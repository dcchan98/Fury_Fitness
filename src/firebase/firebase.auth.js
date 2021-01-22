import firebase from 'firebase/app'

import {
  auth,
  firestore
} from "./firebase"

export const signUp = async (user, name, pass, rePass) => {
  if (pass != rePass) {
    alert("Passwords are different");
  }
  // sign up in firebase
  else {
    await auth
      .createUserWithEmailAndPassword(user, pass).then(msg=>{msg.user.updateProfile({displayName:name})})
      .catch((err) => alert(err.message));
    auth.signOut()
  }
}

export const logIn = (user, pass) => {
  auth.signInWithEmailAndPassword(user, pass).catch((err) => alert(err.message));
}

export const logOut = () => {
  auth.signOut()
}

export const getCurrentStatus = () => {
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
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = async () => {
  const fetchedData = await auth.signInWithPopup(provider)
}