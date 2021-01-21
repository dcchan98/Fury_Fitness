import {auth,firestore} from "./firebase"

export const signUp = ( user,name, pass, rePass) => {
  if (pass != rePass) {
    alert("Passwords are different");
  }
  // sign up in firebase
  else {
    auth
      .createUserWithEmailAndPassword(user, pass)
      .then((cred) => console.log(cred))
      .catch((err) => alert(err.message));
  }
}