import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import googleLogo from '../../images/logos/google-logo.png';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import { UserContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, email } = result.user;
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
          storeAuthToken();
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
          });
    }

    return (
        <div className="login container text-center">
            <Link to="/" className="login-header">
                <img src={logo} alt="logo"/>
            </Link>
            <div className="card">
                <h2>Login With</h2>
                <div className="google-signIn mt-5">
                    <Link to="/" onClick={handleGoogleSignIn} className="google-btn d-flex pt-2 pb-0">
                        <img className="google-icon ml-2 mr-4" src={googleLogo} alt=""/>
                        <p className="pl-5 ml-md-5 ml-0 pt-1 pb-0 mb-2">Continue with Google</p>
                    </Link>
                </div>
                <p className="mt-3">Don’t have an account? <a href="/">Create an account</a></p>
            </div>
        </div>
    );
};

export default Login;