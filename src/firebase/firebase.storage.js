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

// // get specific user 
// export const getSpecificUser = async (uid) =>{

//   const users = await firestore.collection('users').get().toArray();
//   const specifiedUser = users.filter(doc => doc.data().uid === 12345)[0]
//   console.log(specifiedUser);
//   return specifiedUser;

// } 