import React, { Fragment, useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import FakeData from "../../fakeData/fakeData";
import { useForm } from "react-hook-form";




const Register = () => {


	const { user, data } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;
	

	const fakeData = FakeData;

	const [startDate, setStartDate] = useState(new Date());


	const history = useHistory();
	
	const {taskId} = useParams();

	const selectedTask = fakeData.find((item) => item.taskId == taskId);


	const [volunteer, setVolunteer] = useState({
		name: loggedInUser.name,
		email: loggedInUser.email,
		date: "",
	    title: selectedTask.title,
		description: "",
	});

	const { register, handleSubmit, errors} = useForm();
	const onSubmit = data => {
		
		fetch('http://localhost:5000/addVolunteerInfo',{
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(success => {
             
				if (success) {
					
					alert('Registered Successfully');
				}
			 
		})
	};

	return (
		<div className="login-ct">
			<div className="container d-flex align-items-center justify-content-center py-5 my-5">
			<div className=" register p-md-5 p-4">
				<h4 className="mb-5">Register as a Volunteer</h4>

				<form action="/registerVolunteer" onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="name"
							value={volunteer.name}
							// onChange={handleInputValue}
							required={true}
							minLength="3"
							ref={register({ required: true })}
						/>
						{errors.name && <span className="text-danger">name is required</span>}
					</div>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							placeholder="Username or Email"
							name="email"
							value={volunteer.email}
							// onChange={handleInputValue}
							required={true}
							ref={register({ required: true })}
						/>
						{errors.name && <span className="text-danger">email is required</span>}
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="starting date"
							name="date"
							// onChange={handleInputValue}
							required={true}
							ref={register({ required: true })}
						/>
						{errors.name && <span className="text-danger">date is required</span>}
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Event task name"
							name="title"
							value={selectedTask ? selectedTask.title : "Please pick a task from home page"}
							// onChange={handleInputValue}
							required={true}
							ref={register({ required: true })}
						/>
						{errors.name && <span className="text-danger">title is required</span>}
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Description"
							name="description"
							ref={register({ required: true })}
							// onChange={handleInputValue}
						/>
						{errors.name && <span className="text-danger">description is required</span>}
					</div>
					<button type="submit" className="btn btn-primary px-5 mx-5">
						Registration
					</button>
				</form>
				
				
			</div>
		</div>
		</div>
	);
};

export default Register;