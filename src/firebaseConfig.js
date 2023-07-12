import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC5pf_ISiI9Hatq4mzJ7mikl1m6v4BQCCU",
  authDomain: "cybertienda-es.firebaseapp.com",
  projectId: "cybertienda-es",
  storageBucket: "cybertienda-es.appspot.com",
  messagingSenderId: "175298681125",
  appId: "1:175298681125:web:d0b8f969b556bf8ef5a2cc"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);