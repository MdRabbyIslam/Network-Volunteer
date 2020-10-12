import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../Images/logos/Group 1329.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import "./Login.css";
import { UserContext } from "../../App";

firebase.initializeApp(firebaseConfig);

const LogIn = () => {
  const [userInfo, setUserInfo] = useContext(UserContext);
  const provider = new firebase.auth.GoogleAuthProvider();

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const loginHandle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const { displayName, email, emailVerified } = user;

        const newUser = { ...userInfo };
        newUser.name = displayName;
        newUser.email = email;
        newUser.isLogged = emailVerified;
        setUserInfo(newUser);
        storeAuthToken();

        history.replace(from);
      })
      .catch(function (error) {
        console.log(error.message, error.code);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        // Send token to your backend via HTTPS
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <div className="login-bg">
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="login">
        <h2>Login With</h2>
        <button onClick={loginHandle} className="login-btn">
          Continue With Google
        </button>
        <p>
          Don't have an account?{" "}
          <Link className="link" to="/">
            create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
