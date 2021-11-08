import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const firebaseInitialization = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitialization;