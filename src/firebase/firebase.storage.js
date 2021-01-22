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
