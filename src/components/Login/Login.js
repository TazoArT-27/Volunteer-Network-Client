import React, { useContext, useState } from "react";
import logo from "../../images/logos/google.png";
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig  from "./firebase.config";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";

const Login = () => {
	const { user, data } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;

	const [alert, setAlert] = useState({
		success: false,
		error: "",
	});

	/* Route redirects after login */
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: "/events" } };

	// Initialize Firebase
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	/* GOOGLE Sign in */
	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const { displayName, email } = result.user;
				const newUser = {
					isLoggedIn: true,
					name: displayName,
					email: email,
				};
				setLoggedInUser(newUser);
				history.replace(from);

				const newAlert = { ...alert };
				newAlert.success = true;
				newAlert.error = "";
				setAlert(newAlert);
			})
			.catch((error) => {
				const newAlert = { ...alert };
				newAlert.error = error.message;
				setAlert(newAlert);
			});
	};

	return (
		<div className=' login-ct'>
			<div className="container d-flex align-items-center justify-content-center py-5 my-5">
			<div className="login p-md-5 p-5 m-5">
				{alert.error.length > 0 && <div className="alert alert-danger text-center">{alert.error}</div>}

				<h4 className="mb-5 text-center">Login With</h4>
				<button className="btn btn-outline-primary google-login" onClick={handleGoogleSignIn}>
					<img style={{ height:'30px', width:'30px'}}src={logo} alt="" />
					<span className="pl-5 ml-5 mr-5 pr-3">Continue with Google</span>
				</button>
				<h5 className="mt-3 mb-5">
					<span>Don’t have an account?</span>
					<Link to="/login">Create an account</Link>
				</h5>
			</div>
		    </div>
		</div>
	);
};

export default Login;