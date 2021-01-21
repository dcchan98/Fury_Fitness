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
}

auth.onAuthStateChanged(
  user => {
    if (user != null) {
      console.log("user signed in")
      console.log(user)
    }
    else{
      console.log("user not signed in")
    }
  }
);