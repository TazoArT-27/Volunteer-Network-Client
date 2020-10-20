import React from 'react';

const Tasks = ({task, deleteTask}) => {
    return (
        <div>
            <div className="col-lg-6">
			<div className="">
				<div class="card" style={{width: '18rem'}}>
				<div class="card-body text-center">
					<h5 class="card-title">{task.title}</h5>
					<p class="card-text">{task.date}</p>
					
				</div>
				<button className="btn btn-secondary" onClick={() => deleteTask(task._id)}>
					Cancel
				</button>
				</div>
			</div>
		</div>
        </div>
    );
};

export default Tasks;