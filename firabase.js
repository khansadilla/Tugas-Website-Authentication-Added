// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXvBJAQFzuA8OgWfFociWgw6UpqUiJUNY",
  authDomain: "authentication-vlab-ph.firebaseapp.com",
  projectId: "authentication-vlab-ph",
  storageBucket: "authentication-vlab-ph.firebasestorage.app",
  messagingSenderId: "908574455922",
  appId: "1:908574455922:web:5e56ec43aec83acba2eaeb",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // Export supaya bisa dipakai di file lain
