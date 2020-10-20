import React, { useEffect, useState } from 'react';
import List from './List';
import ListBar from './Listbar';

const VolunteerList = () => {
    const [volunteerList, setVolunteerList] = useState([]);
    useEffect(() => {
		
			fetch("https://pacific-spire-22845.herokuapp.com/loadVolunteerList")
				.then((res) => res.json())
				.then((data) => {
					setVolunteerList(data);
				});
		
    }, []);
    
    const handleDeleteEvent = (id) => {
			fetch(`https://pacific-spire-22845.herokuapp.com/admin/deleteTask/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((result) => {
					if (result) {
						const newVolList = volunteerList.filter((task) => task._id !== id);
						setVolunteerList(newVolList);
					}
				});
		}
	
    return (
        // <div className="ml-5 pl-5">
            
        //         <List tasks={volunteerList} deleteHandler={handleDeleteEvent}></List>
            
        // </div>
        <section>
            <div className="container-fluid row">
            <div className="col-md-2">
                <ListBar></ListBar>
            </div>
            <div className="col-md-10" style={{backgroundColor: '#F4F7FC'}}>
                
                <div className="mt-5 pt-3">
                <div className="ml-5 pl-5">
            
                     <List tasks={volunteerList} deleteHandler={handleDeleteEvent}></List>
                
             </div>
                </div>
                
            </div>
            </div>
        </section>
    );
};

export default VolunteerList;