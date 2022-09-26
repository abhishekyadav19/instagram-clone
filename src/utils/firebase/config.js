import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCCpmdA-oSm522dyqj031Gwr640N7S_wqE",
    authDomain: "instagram-clone-fb7b1.firebaseapp.com",
    projectId: "instagram-clone-fb7b1",
    storageBucket: "instagram-clone-fb7b1.appspot.com",
    messagingSenderId: "607712064538",
    appId: "1:607712064538:web:25350f7cefd405066fcda3"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);


export { storage, db };
