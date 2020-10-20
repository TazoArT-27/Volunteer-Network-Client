import React from "react";

const List = ({ tasks, deleteHandler }) => {
	return (
		<div className="admin-vol-list">
			<h5 className="display-5 py-lg-4 pb-2">Volunteer register list</h5>
			<div className="admin-content">
				<table>
					<thead>
						<tr>
							<th className='mr-5 pr-5'>Name</th>
							<th className='mr-5 pr-5'>Email ID</th>
							<th className='mr-5 pr-5'>Starting Date</th>
							<th className='mr-5 pr-5'>Volunteer task</th>
							<th className='mr-5 pr-5'>Action</th>
						</tr>
					</thead>
					<tbody>
						{tasks.length > 0 ? (
							tasks.map((task) => (
								<tr key={task._id}>
									<td className='mr-5 pr-5'>{task.name}</td>
									<td className='mr-5 pr-5'>{task.email}</td>
									<td className='mr-5 pr-5'>{task.date}</td>
									<td className='mr-5 pr-5'>{task.title}</td>
									<td className='mr-5 pr-5'>
										<button className="btn btn-danger" onClick={() => deleteHandler(task._id)}>
											
                                            Delete
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan="5">
									<div className="alert alert-warning text-center" role="alert">
										No task found on database
									</div>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default List;