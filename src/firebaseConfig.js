// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from
    "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc } from
    "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDz522Q_j6ZRe0wNKVH56hTQI2TzRaRORM",
    authDomain: "app-projetos-lpe.firebaseapp.com",
    projectId: "app-projetos-lpe",
    storageBucket: "app-projetos-lpe.appspot.com",
    messagingSenderId: "862286000413",
    appId: "1:862286000413:web:931ab43aafd042d6de71f4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const githubProvider = new GithubAuthProvider();

const signInWithGitHub = async () => {
    try {
        const res = await signInWithPopup(auth, githubProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);

        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "github",
                email: user.email
            });
        }

        console.log(user);

    } catch (error) {
        console.log(error);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    signInWithGitHub,
    logout,
};