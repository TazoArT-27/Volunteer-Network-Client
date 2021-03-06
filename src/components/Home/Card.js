import React from "react";
import { Link } from "react-router-dom";

const Card = ({ task }) => {
	return (
		<div className="col-lg-3 col-sm-6">
			<Link to={`/events/${task.taskId}`}>
				<div className="">
                    <img style={{ maxWidth: "100%" }} src={task.img} alt="task" />
					<h4 className='pt-1 pb-5'>{task.title}</h4>
				</div>
			</Link>
		</div>
	);
};

export default Card;