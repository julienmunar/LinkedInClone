import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBFe1byHDLalxHOKRsUa47V6BnvwZI_CFE",
    authDomain: "linkedin-clone-36d48.firebaseapp.com",
    projectId: "linkedin-clone-36d48",
    storageBucket: "linkedin-clone-36d48.appspot.com",
    messagingSenderId: "137030896640",
    appId: "1:137030896640:web:82f6ce09e18708d7c51ce5"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth=getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);


  export {db,auth};