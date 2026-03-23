import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZ39rFl66TwUI1BKZlsfoTgdH2CNZ9slI",
    authDomain: "curso-sujeito-programado-a4d56.firebaseapp.com",
    projectId: "curso-sujeito-programado-a4d56",
    storageBucket: "curso-sujeito-programado-a4d56.firebasestorage.app",
    messagingSenderId: "826399379266",
    appId: "1:826399379266:web:0983f42a23a5b8701442db",
    measurementId: "G-E3WT29ZRZM"
};

const firebaseapp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseapp);

export { db };