import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logos/logo.png";
import userIcon from "../../images/logos/users-alt 1.png";

const Header = () => {
	const { user, data } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;

	return (
		<header className="px-lg-5 px-0">
			<nav className="navbar navbar-expand-md navbar-light">
				<Link className="navbar-brand" to="/">
					<img style={{ width: "202.81px" }} src={logo} alt="" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav ml-auto align-items-md-center">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/events">
								Events
							</Link>
						</li>
						{!loggedInUser.isLoggedIn && (
							<li className="nav-item">
								<Link className="nav-link" to="/login">
									Login
								</Link>
							</li>
						)}
						{!loggedInUser.isLoggedIn && (
							<li className="nav-item">
								<Link className="nav-link" to="/register">
									<button className="btn btn-primary">Register</button>
								</Link>
							</li>
						)}
						{loggedInUser.isLoggedIn && (
							<li className="nav-item">
								<Link className="nav-link" to="/admin">
									<button className="btn btn-dark">Admin</button>
								</Link>
							</li>
						)}
						{loggedInUser.isLoggedIn && (
							<li className="nav-item user">
								<img src={userIcon} alt="" />
								{loggedInUser.name ? loggedInUser.name.split(" ").slice(0, 1) : "User"}
							</li>
						)}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;