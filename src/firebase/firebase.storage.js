import {
  auth,
  firestore
} from "./firebase"

firestore.settings({
  timestampsInSnapshots: true
})

