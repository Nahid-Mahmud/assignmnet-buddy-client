import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  //use state for user
  const [user, setUser] = useState(null);
  // use state for user Loading time
  const [loading, setLoading] = useState(true);

  // singup with email pasword
  const emailPassSignup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email Passwornd login
  const emailPassLogin = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  // Social login with google
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // signOut
  const signoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // setting the observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email; // user from useState
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      // console.log("current user", currentUser);
      setLoading(false);
      // if user exist
      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_serverUrl}/jwt`, loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("Token response", res.data);
          });
      } else {
        axios
          .post(`${import.meta.env.VITE_serverUrl}/logout`, loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user?.email]);
  // console.log(user);

  const demoUser = { name: "nahid" };
  console.log(user);
  const authValues = {
    demoUser,
    user,
    loading,
    emailPassSignup,
    emailPassLogin,
    googleLogIn,
    signoutUser,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
