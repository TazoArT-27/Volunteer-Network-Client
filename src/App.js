import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import EventTasks from "./components/EventTasks/EventTasks";
import AdminDashboard from "./components/Admin/AdminDashboard";
import MakeAdmin from "./components/Admin/MakeAdmin";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	// const [baseData, setBaseData] = useState([]);

	const globalStates = {
		user: [loggedInUser, setLoggedInUser],
		// data: [baseData, setBaseData],
	};

	return (
		<UserContext.Provider value={globalStates}>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<PrivateRoute path="/register">
						<Register></Register>
					</PrivateRoute>
					<Route exact path="/events">
						<EventTasks></EventTasks>
					</Route>
					<PrivateRoute path="/events/:taskId">
						<Register></Register>
					</PrivateRoute>
					<Route path="/admin">
						<AdminDashboard></AdminDashboard>
					</Route>
					<Route path="/makeAdmin">
						<MakeAdmin></MakeAdmin>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
