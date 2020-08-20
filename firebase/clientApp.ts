import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

if (typeof window !== 'undefined' && !firebase.apps.length) {
  const app = firebase.initializeApp(clientCredentials)

  const firestore = app.firestore()
  const functions = app.functions()
  // To enable analytics. https://firebase.google.com/docs/analytics/get-started
  // if (clientCredentials.measurementId) {
  //   analytics = firebase.analytics()
  // }

  // Use Firebase Emulator by default
  firestore.settings({
    host: 'localhost:8080',
    ssl: false,
    experimentalForceLongPolling: !!window.Cypress,
  })
  functions.useFunctionsEmulator('http://localhost:5001')
}

export default firebase
