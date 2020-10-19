import React from "react";
import { UserContext } from "../../App";
import fakeData from "../../fakeData/fakeData";
import Card from "./Card";
import './Home.css';

const Home = () => {
	return (
		<main className="vn-home pt-5 mt-2">
			<div className="container text-center">
				<div className="vn-works-search">
					<h2 className="font mb-4">I Grow By Helping People In Need.</h2>
					{/* <div className="form-group">
						<input type="search" placeholder="Search ... " className="form-control" />
						<button className="btn btn-primary" type="button" id="button-addon2">
							Search
						</button>
					</div> */}
                    
                    <form class="form-inline my-2 my-lg-0 search-box">
                        <input class="form-control mr-sm-0" type="search" placeholder="Search..." aria-label="Search"/>
                        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit"><span className='mx-3'>Search</span></button>
                    </form>
                    
				</div>
				<div className="vn-works py-5 mt-2">
					
					
						<div className="row">
							{fakeData.map((task) => (
								<Card task={task} key={Math.random()}></Card>
							))}
						</div>
					
					
				</div>
			</div>
		</main>
	);
};

export default Home;