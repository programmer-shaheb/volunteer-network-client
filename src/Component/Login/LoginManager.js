import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const LoginManager = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(userContext);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  const history = useHistory();
  const location = useLocation();

  // Google SignIn
  const provider = new firebase.auth.GoogleAuthProvider();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setIsLoggedIn(result.user);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setIsLoggedIn("");
      });
  };

  return (
    <>
      {!isLoggedIn ? (
        <>
          <button
            className="btn btn-outline-primary w-75 mt-3"
            onClick={handleGoogleLogin}
            style={{ borderRadius: "20px" }}
          >
            Continue With Google
          </button>
        </>
      ) : (
        <>
          <h2>{isLoggedIn.displayName}</h2>
          <button
            className="btn btn-outline-primary w-75 mt-3"
            onClick={handleLogOut}
            style={{ borderRadius: "20px" }}
          >
            Log Out
          </button>
        </>
      )}
    </>
  );
};

export default LoginManager;
