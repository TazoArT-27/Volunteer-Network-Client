import React, { useState } from 'react';
import ListBar from './Listbar';

const AdminDashboard = () => {

    const [addWork, setAddWork] = useState({});
    const handleBlur = (e) => {
        const newWork = {...addWork};
        newWork[e.target.name] = e.target.value;
        setAddWork(newWork);
    }
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', addWork.title);
        formData.append('description', addWork.description);
      
        fetch('https://pacific-spire-22845.herokuapp.com/addWork', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
      }
    

    return (
        <section>
            <div className="container-fluid row">
                    <div className="col-md-2">
                        <ListBar></ListBar>
                    </div>
                    <div className="col-md-10" style={{backgroundColor: '#F4F7FC'}}>
                        <h4 className="mt-4">Add Services</h4>
                        
                        <div className="mt-5 pt-3">
                    
                            <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Service Title</label>
                                <input onBlur={handleBlur} name="title"  type="text" class="input-box form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Description</label>
                                <textarea onBlur={handleBlur} name="description" class="input-box form-control" rows="5"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlFile1">file</label>
                                <input onChange={handleFileChange} type="file" name='file' class="form-control-file" id="exampleFormControlFile1"/>
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                
                        </div>
                        
                    </div>
            </div>
        </section>
    );
};

export default AdminDashboard;