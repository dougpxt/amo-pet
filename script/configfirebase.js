  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
  import { 
    getDatabase, 
    set,
    push, 
    update,
    query,
    ref,
    onChildAdded
  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
//  

  const firebaseConfig = {
    apiKey: "AIzaSyAUtyRGVxmDoBLWM80uU3BlSfsX_zSjz5s",
    authDomain: "pet-spot-1.firebaseapp.com",
    projectId: "pet-spot-1",
    storageBucket: "pet-spot-1.appspot.com",
    messagingSenderId: "169557807307",
    appId: "1:169557807307:web:8f38f267b1048ed87bcb4e"
  };

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)
  const auth = getAuth(app)

export { db, set, update, query, push, ref, onChildAdded };