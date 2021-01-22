import {
  auth,
  firestore
} from "./firebase"

firestore.settings({
  timestampsInSnapshots: true
})


// get users for debugging
export const getUsers =  () =>{
  firestore.collection('users').get().then(ss=>
    ss.docs.forEach(doc=>console.log(doc.data()))
    )
}

// add user
export const addNewUser =  async (displayName,uid) =>{

const ref = firestore.collection('users').doc(uid);
const doc = await ref.get();
    
if (!doc.exists) {
  console.log("creating new user")
  firestore.collection("users").doc(uid).set({displayName,uid,foodItems:[]})
} else {
    console.log("user exists")
}
}

// // get specific user 
// export const getSpecificUser = async (uid) =>{

//   const users = await firestore.collection('users').get().toArray();
//   const specifiedUser = users.filter(doc => doc.data().uid === 12345)[0]
//   console.log(specifiedUser);
//   return specifiedUser;

// } 