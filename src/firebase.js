import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAhgOk5TWNharEblncr1Q3j-71RIIRL4E8",
    authDomain: "eca2024-a27d3.firebaseapp.com",
    projectId: "eca2024-a27d3",
    storageBucket: "eca2024-a27d3.appspot.com",
    messagingSenderId: "436283056705",
    appId: "1:436283056705:web:44d850cae7d7ee47c05cc0"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
