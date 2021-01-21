import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {
  useAuthState
} from 'react-firebase-hooks/auth'
import {
  useCollectionData
} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyAfiAwPq8oBXSiABhZB-2bK6kPJck2039s",
    authDomain: "fury-fitness.firebaseapp.com",
    projectId: "fury-fitness",
    storageBucket: "fury-fitness.appspot.com",
    messagingSenderId: "725104832050",
    appId: "1:725104832050:web:95b5cf7f824f79ad5f562b",
    measurementId: "G-N614T72HNF"
  }
)

export const auth = firebase.auth()
export const firestore = firebase.firestore()