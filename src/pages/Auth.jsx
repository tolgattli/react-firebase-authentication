import React from "react";
import "../styles/page-styles/Auth.css";
import { useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { provider } from "../firebase";


const Auth = () => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState({ email: "", password: "" });

  const onChangeFunction = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunction = async () => {
    if (signUp) {
      // register
      try {
        const data = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = data.user;
        if (user) {
          window.location = "/dashboard";
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      // login
      try {
        const data = await signInWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = data.user;
        if (user) {
          window.location = "/dashboard";
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };


  const googleLogin =async () =>{
   await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      if(user){
        window.location = "/dashboard"
      }
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  return (
    <div className="auth">
      <div className="auth-container">
        <h2>{signUp ? "Register" : "Login"}</h2>
        <input
          name="email"
          value={authData.email}
          onChange={onChangeFunction}
          type="email"
          placeholder="email"
        />
        <input
          name="password"
          value={authData.password}
          onChange={onChangeFunction}
          type="password"
          placeholder="password"
        />
        <button onClick={googleLogin} className="auth-container-google">Google ile giriş yap</button>
        <p onClick={() => setSignUp(!signUp)}>
          {signUp
            ? "Daha önceden kayıt oldunuz mu?"
            : "Kayıt olmak mı istiyorsunuz?"}
        </p>
        <button onClick={authFunction} className="auth-container-button">
          {signUp ? "Register" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
