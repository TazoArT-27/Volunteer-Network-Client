import React from 'react';
import ListBar from './Listbar';

const MakeAdmin = () => {
    return (
        <section>
            <div className="container-fluid row">
            <div className="col-md-2">
                <ListBar></ListBar>
            </div>
            <div className="col-md-10" style={{backgroundColor: '#F4F7FC'}}>
                <h4 className="mt-4">Add Services</h4>
                
                <div className="mt-5 pt-3">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input name="email" placeholder="jon@gmail.com" type="email" class="input-box form-control"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                </div>
                
            </div>
            </div>
        </section>
    );
};

export default MakeAdmin;