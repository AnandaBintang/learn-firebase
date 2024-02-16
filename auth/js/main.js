// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your Config Here

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth();

function login() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("Login Sukses! Halo " + user.email);
    })
    .catch((error) => {
      alert("Login Gagal! Error: " + error.message);
    });
}

function logout() {
  signOut(auth)
    .then(() => {
      alert("Logout Sukses!");
    })
    .catch((error) => {
      alert("Logout gagal! Error: " + error.message);
    });
}

window.login = login;
window.logout = logout;
