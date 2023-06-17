import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyC0ZBognHQmr642_DWegJT5TVgv1Y3xA6g",
  authDomain: "tiktok---clone-794cf.firebaseapp.com",
  projectId: "tiktok---clone-794cf",
  storageBucket: "tiktok---clone-794cf.appspot.com",
  messagingSenderId: "844413177344",
  appId: "1:844413177344:web:5812633b01851f365a52e5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;