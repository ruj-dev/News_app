import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCxUDINagdbyiRNIRVqWmJuHDFp3g2mKaw",
  authDomain: "news-application-15f86.firebaseapp.com",
  projectId: "news-application-15f86",
  storageBucket: "news-application-15f86.appspot.com",
  messagingSenderId: "887257423216",
  appId: "1:887257423216:web:f5bf6a8750944db0c1c3b5",
  measurementId: "G-8VH8BWB0HJ",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
