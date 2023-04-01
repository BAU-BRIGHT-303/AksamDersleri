import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAWmS7WuHDqyBlKtOOOc2q-c-n14vvHSJY",
    authDomain: "plakstore.firebaseapp.com",
    projectId: "plakstore",
    storageBucket: "plakstore.appspot.com",
    messagingSenderId: "959781880327",
    appId: "1:959781880327:web:1ae47ffde6dfa54997e0a2",
    measurementId: "G-L4WG37NWFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const register = async (email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};
export default app;