// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// lib/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { NEXT_PUBLIC_FIREBASE_API_KEY,
         NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
         NEXT_PUBLIC_FIREBASE_PROJECT_ID,
         NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
         NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_I,
         NEXT_PUBLIC_FIREBASE_APP_ID,
         NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID} from '../../.env';
const firebaseConfig = {
  apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_I,
  appId: NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
