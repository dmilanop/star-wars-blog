import React from "react";
import ListCards from "../component/ListCards.jsx";
import "../../styles/home.scss";

const Home = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-3">
						<h1 className="heading-characters">Characters</h1>
					</div>
				</div>
			</div>

			<ListCards />
		</>
	);
};

export default Home;
