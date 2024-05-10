 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyD3k9JiV7uyP1nnfG7uVy9ELbdudRNET_U",
   authDomain: "login-7ecc5.firebaseapp.com",
   projectId: "login-7ecc5",
   storageBucket: "login-7ecc5.appspot.com",
   messagingSenderId: "1039991397912",
   appId: "1:1039991397912:web:efc5b6ae4c869b6039ed6d"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 const submit = document.getElementById('submit');
 submit.addEventListener("click", function(event) {
     event.preventDefault();
        
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Logging In...")
      window.location.href = "grand.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
 })