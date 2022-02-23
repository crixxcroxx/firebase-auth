import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3Nqi5QBy4yBZOjlPIaQEX_3QEHjhoZq0",
  authDomain: "fir-auth-478ad.firebaseapp.com",
  projectId: "fir-auth-478ad",
  storageBucket: "fir-auth-478ad.appspot.com",
  messagingSenderId: "951537035377",
  appId: "1:951537035377:web:abde998232f8b7a39b93d0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
