import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDVIyfo0vI6Fe-iiEkEbY9d4PyyKfIAcy0',
  authDomain: 'myspendingtrend.firebaseapp.com',
  projectId: 'myspendingtrend',
  storageBucket: 'myspendingtrend.appspot.com',
  messagingSenderId: '972405279744',
  appId: '1:972405279744:web:445796c1ae8ebd087d9ce5',
  measurementId: 'G-L9YNRBM7BL',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
